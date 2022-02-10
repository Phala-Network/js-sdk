import {waitReady, sr25519KeypairFromSeed} from '@polkadot/wasm-crypto'
import type {ApiPromise} from '@polkadot/api'
import type {Signer} from '@polkadot/types/types'
import {u8aToHex, hexToU8a, hexAddPrefix} from '@polkadot/util'
import {decodeAddress} from '@polkadot/util-crypto'
import {randomHex} from './lib/hex'
import {pruntimeRpc} from './proto'
import type {InjectedAccountWithMeta} from '@polkadot/extension-inject/types'

export type CertificateData = {
  certificate: pruntimeRpc.ICertificate
  pubkey: Uint8Array
  secret: Uint8Array
}

export const signCertificate = async ({
  api,
  address,
  signer,
  account,
  signatureType,
}: {
  api: ApiPromise
  address?: string
  signer: Signer
  account?: InjectedAccountWithMeta
  signatureType?: pruntimeRpc.SignatureType
}): Promise<CertificateData> => {
  await waitReady()
  const seed = hexToU8a(hexAddPrefix(randomHex(32)))
  const pair = sr25519KeypairFromSeed(seed)
  const [secret, pubkey] = [pair.slice(0, 64), pair.slice(64)]

  const encodedCertificateBody = api
    .createType('CertificateBody', {
      pubkey: u8aToHex(pubkey),
      ttl: 0x7fffffff, // FIXME: max ttl is not safe
      config_bits: 0,
    })
    .toU8a()

  const signerAddress = account ? account.address : address
  if (!signerAddress)
    throw new Error('Signer Address or Account should be provided')

  const signerResult = await signer.signRaw?.({
    address: signerAddress,
    data: u8aToHex(encodedCertificateBody),
    type: 'bytes',
  })

  if (!signerResult) throw new Error('No signer result')

  const certificate: pruntimeRpc.ICertificate = {
    encodedBody: encodedCertificateBody,
    signature: {
      signedBy: {
        encodedBody: api
          .createType('CertificateBody', {
            pubkey: u8aToHex(decodeAddress(signerAddress)),
            ttl: 0x7fffffff, // FIXME: max ttl is not safe
            config_bits: 0,
          })
          .toU8a(),
        signature: null,
      },
      signatureType: signatureType || getSignatureTypeFromAccount(account),
      signature: hexToU8a(signerResult.signature),
    },
  }

  return {
    certificate,
    pubkey,
    secret,
  }
}

// Assume signature came from Polkadot JS as sr25519
const defaultSignatureType = pruntimeRpc.SignatureType.Sr25519WrapBytes

const getSignatureTypeFromAccount = (
  account: InjectedAccountWithMeta | undefined
) => {
  if (!account) {
    return defaultSignatureType
  }
  const keypairType = account.type ? account.type : 'sr25519'
  // Polkadot JS signature use wrapBytes
  const useWrapBytes = account.meta.source === 'polkadot-js'
  switch (keypairType) {
    case 'sr25519':
      return useWrapBytes
        ? pruntimeRpc.SignatureType.Sr25519WrapBytes
        : pruntimeRpc.SignatureType.Sr25519
    case 'ed25519':
      return useWrapBytes
        ? pruntimeRpc.SignatureType.Ed25519WrapBytes
        : pruntimeRpc.SignatureType.Ed25519
    case 'ecdsa':
      return useWrapBytes
        ? pruntimeRpc.SignatureType.EcdsaWrapBytes
        : pruntimeRpc.SignatureType.Ecdsa
    default:
      throw new Error('Unsupported keypair type')
  }
}
