import {waitReady, sr25519KeypairFromSeed} from '@polkadot/wasm-crypto'
import type {ApiPromise} from '@polkadot/api'
import type {Signer} from '@polkadot/types/types'
import {u8aToHex, hexToU8a, hexAddPrefix} from '@polkadot/util'
import {decodeAddress} from '@polkadot/util-crypto'
import {randomHex} from './lib/hex'
import {pruntime_rpc} from './proto'
import type {InjectedAccountWithMeta} from '@polkadot/extension-inject/types'

export type CertificateData = {
  certificate: pruntime_rpc.ICertificate
  pubkey: Uint8Array
  secret: Uint8Array
}

export const signCertificate = async ({
  api,
  address,
  signer,
  account,
  signature_type,
}: {
  api: ApiPromise
  address?: string
  signer: Signer
  account?: InjectedAccountWithMeta
  signature_type?: pruntime_rpc.SignatureType
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

  const certificate: pruntime_rpc.ICertificate = {
    encoded_body: encodedCertificateBody,
    signature: {
      signed_by: {
        encoded_body: api
          .createType('CertificateBody', {
            pubkey: u8aToHex(decodeAddress(signerAddress)),
            ttl: 0x7fffffff, // FIXME: max ttl is not safe
            config_bits: 0,
          })
          .toU8a(),
        signature: null,
      },
      signature_type: signature_type
        ? signature_type
        : getSignatureTypeFromAccount(account),
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
const defaultSignatureType = pruntime_rpc.SignatureType.Sr25519WrapBytes

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
        ? pruntime_rpc.SignatureType.Sr25519WrapBytes
        : pruntime_rpc.SignatureType.Sr25519
    case 'ed25519':
      return useWrapBytes
        ? pruntime_rpc.SignatureType.Ed25519WrapBytes
        : pruntime_rpc.SignatureType.Ed25519
    case 'ecdsa':
      return useWrapBytes
        ? pruntime_rpc.SignatureType.EcdsaWrapBytes
        : pruntime_rpc.SignatureType.Ecdsa
    default:
      throw new Error('Unsupported keypair type')
  }
}
