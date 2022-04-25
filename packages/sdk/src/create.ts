import axios from 'axios'
import type {ApiPromise} from '@polkadot/api'
import {
  u8aToHex,
  hexToU8a,
  hexAddPrefix,
  stringToHex,
  hexStripPrefix,
} from '@polkadot/util'
import {
  waitReady,
  sr25519KeypairFromSeed,
  sr25519Sign,
  sr25519Agree,
} from '@polkadot/wasm-crypto'
import type {ContractCallRequest, AccountId} from '@polkadot/types/interfaces'
import type {ISubmittableResult} from '@polkadot/types/types'
import {from} from 'rxjs'
import {encrypt, decrypt} from './lib/aes-256-gcm'
import {randomHex} from './lib/hex'
import type {CertificateData} from './certificate'
import {pruntimeRpc, prpc} from './proto'
import type {SubmittableExtrinsic} from '@polkadot/api/types'

export type Query = (
  encodedQuery: string,
  certificateData: CertificateData
) => Promise<string>

type EncryptedData = {
  iv: string
  pubkey: string
  data: string
}

type CreateEncryptedData = (
  data: string,
  agreementKey: Uint8Array
) => EncryptedData

export type Command = (params: {
  contractId: string
  payload: string
}) => SubmittableExtrinsic<'promise', ISubmittableResult>

export interface PhalaInstance {
  query: Query
  command: Command
}

type CreateFn = (options: {
  api: ApiPromise
  baseURL: string
  contractId: string
}) => Promise<ApiPromise>

export const create: CreateFn = async ({api, baseURL, contractId}) => {
  await waitReady()

  // Create a http client prepared for protobuf
  const http = axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/octet-stream',
    },
    responseType: 'arraybuffer',
  }).post

  // Get public key from remote for encrypting
  const {publicKey} = pruntimeRpc.PhactoryInfo.decode(
    new Uint8Array((await http<ArrayBuffer>('/prpc/PhactoryAPI.GetInfo')).data)
  )

  if (!publicKey) throw new Error('No remote pubkey')
  const remotePubkey = hexAddPrefix(publicKey)

  const pruntimeApi = pruntimeRpc.PhactoryAPI.create(
    async (method, requestData, callback) => {
      try {
        const res = await http<ArrayBuffer>(
          `/prpc/PhactoryAPI.${method.name}`,
          new Uint8Array(requestData)
        )
        callback(null, new Uint8Array(res.data))
      } catch (err: any) {
        if (err?.response?.data instanceof ArrayBuffer) {
          const message = new Uint8Array(err.response.data)
          callback(new Error(prpc.PrpcError.decode(message).message))
        } else {
          throw err
        }
      }
    }
  )

  // Generate a keypair for encryption
  // NOTE: each instance only has a pre-generated pair now, it maybe better to generate a new keypair every time encrypting
  const seed = hexToU8a(hexAddPrefix(randomHex(32)))
  const pair = sr25519KeypairFromSeed(seed)
  const [sk, pk] = [pair.slice(0, 64), pair.slice(64)]

  const queryAgreementKey = sr25519Agree(
    hexToU8a(hexAddPrefix(remotePubkey)),
    sk
  )
  const contractKey = (
    await api.query.phalaRegistry.contractKeys(contractId)
  ).toString()

  if (!contractKey) {
    throw new Error(`No contract key for ${contractId}`)
  }

  const commandAgreementKey = sr25519Agree(hexToU8a(contractKey), sk)

  const createEncryptedData: CreateEncryptedData = (data, agreementKey) => {
    const iv = hexAddPrefix(randomHex(12))
    return {
      iv,
      pubkey: u8aToHex(pk),
      data: hexAddPrefix(encrypt(data, agreementKey, hexToU8a(iv))),
    }
  }

  const query: Query = async (encodedQuery, {certificate, pubkey, secret}) => {
    // Encrypt the ContractQuery.
    const encryptedData = createEncryptedData(encodedQuery, queryAgreementKey)
    const encodedEncryptedData = api
      .createType('EncryptedData', encryptedData)
      .toU8a()

    // Sign the encrypted data.
    const signature: pruntimeRpc.ISignature = {
      signedBy: certificate,
      signatureType: pruntimeRpc.SignatureType.Sr25519,
      signature: sr25519Sign(pubkey, secret, encodedEncryptedData),
    }

    // Send request.
    const requestData = {
      encodedEncryptedData,
      signature,
    }
    return pruntimeApi.contractQuery(requestData).then((res) => {
      const {encodedEncryptedData} = res
      const {data: encryptedData, iv} = api
        .createType('EncryptedData', encodedEncryptedData)
        .toJSON() as {
        iv: string
        data: string
      }
      const data = decrypt(encryptedData, queryAgreementKey, iv)
      return hexAddPrefix(data)
    })
  }

  const command: Command = ({contractId, payload}) => {
    const encodedPayload = api
      .createType('CommandPayload', {
        encrypted: createEncryptedData(payload, commandAgreementKey),
      })
      .toHex()

    return api.tx.phalaMq.pushMessage(
      stringToHex(`phala/contract/${hexStripPrefix(contractId)}/command`),
      encodedPayload
    )
  }

  const txContracts = (
    dest: AccountId,
    value: any,
    gasLimit: any,
    data: Uint8Array
  ) => {
    return command({
      contractId: dest.toHex(),
      payload: api
        .createType('InkCommand', {
          InkMessage: {
            nonce: hexAddPrefix(randomHex(32)),
            // FIXME: unexpected u8a prefix
            message: api.createType('Vec<u8>', data).toHex(),
          },
        })
        .toHex(),
    })
  }

  Object.defineProperty(txContracts, 'meta', {
    value: {args: []},
    enumerable: true,
  })

  Object.defineProperty(api.tx, 'contracts', {
    value: {
      instantiateWithCode: () => null,
      call: txContracts,
    },
    enumerable: true,
  })

  Object.defineProperty(api.rx.rpc, 'contracts', {
    value: {
      call: ({origin, dest, inputData}: ContractCallRequest) => {
        return from(
          query(
            api
              .createType('InkQuery', {
                head: {
                  nonce: hexAddPrefix(randomHex(32)),
                  id: dest,
                },
                data: {
                  InkMessage: inputData,
                },
              })
              .toHex(),
            origin as any as CertificateData
          ).then((data) => {
            return api.createType(
              'ContractExecResult',
              (
                api.createType('InkResponse', hexAddPrefix(data)).toJSON() as {
                  result: {ok: {inkMessageReturn: string}}
                }
              ).result.ok.inkMessageReturn
            )
          })
        )
      },
    },
    enumerable: true,
  })

  return api
}
