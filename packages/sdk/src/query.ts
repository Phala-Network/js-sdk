import axios from 'axios'
import type {ApiPromise} from '@polkadot/api'
import {u8aToHex, hexToU8a, hexAddPrefix} from '@polkadot/util'
import {
  waitReady,
  sr25519KeypairFromSeed,
  sr25519Sign,
  sr25519Agree,
} from '@polkadot/wasm-crypto'
import {encrypt, decrypt} from './lib/aes-256-gcm'
import {randomHex} from './lib/hex'
import type {CertificateData} from './certificate'
import {pruntime_rpc, prpc} from './proto'

export type QueryFn = (
  encodedQuery: string,
  certificateData: CertificateData
) => Promise<string>

export const createQuery = async ({
  api,
  baseURL,
}: {
  api: ApiPromise
  baseURL: string
}): Promise<QueryFn> => {
  await waitReady()

  const http = axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/octet-stream',
    },
    responseType: 'arraybuffer',
  }).post

  const {public_key} = pruntime_rpc.PhactoryInfo.decode(
    new Uint8Array((await http<ArrayBuffer>('/prpc/PhactoryAPI.GetInfo')).data)
  )
  if (!public_key) throw new Error('No remote pubkey')
  const remotePubkey = hexAddPrefix(public_key)

  const contractQuery = (data: pruntime_rpc.IContractQueryRequest) =>
    http<ArrayBuffer>('/prpc/PhactoryAPI.ContractQuery', data, {
      transformRequest: (data: pruntime_rpc.IContractQueryRequest) =>
        pruntime_rpc.ContractQueryRequest.encode(data).finish(),
    })
      .then((res) => {
        return {
          ...res,
          data: pruntime_rpc.ContractQueryResponse.decode(
            new Uint8Array(res.data)
          ),
        }
      })
      .catch((err) => {
        if (err.response?.data instanceof ArrayBuffer) {
          const message = new Uint8Array(err.response.data)
          throw new Error(prpc.PrpcError.decode(message).message)
        }

        throw err
      })

  return async (encodedQuery: string, {certificate, pubkey, secret}) => {
    // 1. Encrypt the ContractQuery.
    const seed = hexToU8a(hexAddPrefix(randomHex(32))) // Only for encryption
    const pair = sr25519KeypairFromSeed(seed)
    const [sk, pk] = [pair.slice(0, 64), pair.slice(64)]
    const iv = hexAddPrefix(randomHex(12))
    const agreementKey = sr25519Agree(hexToU8a(hexAddPrefix(remotePubkey)), sk)
    const encryptedData = {
      iv,
      pubkey: u8aToHex(pk),
      data: hexAddPrefix(encrypt(encodedQuery, agreementKey, hexToU8a(iv))),
    }
    const encodedEncryptedData = api
      .createType('EncryptedData', encryptedData)
      .toU8a()

    // 2. Sign the encrypted data.
    const signature: pruntime_rpc.ISignature = {
      signed_by: certificate,
      signature_type: pruntime_rpc.SignatureType.Sr25519,
      signature: sr25519Sign(pubkey, secret, encodedEncryptedData),
    }

    // 3. Send request.
    const requestData = {
      encoded_encrypted_data: encodedEncryptedData,
      signature,
    }
    return contractQuery(requestData).then((res) => {
      const encodedEncryptedData = res.data.encoded_encrypted_data
      const {data: encryptedData, iv} = api
        .createType('EncryptedData', encodedEncryptedData)
        .toJSON() as {
        iv: string
        data: string
      }
      const data = decrypt(encryptedData, agreementKey, iv)
      return hexAddPrefix(data)
    })
  }
}
