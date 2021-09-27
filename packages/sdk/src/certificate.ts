import {waitReady, sr25519KeypairFromSeed} from '@polkadot/wasm-crypto'
import type {ApiPromise} from '@polkadot/api'
import type {Signer} from '@polkadot/types/types'
import {u8aToHex, hexToU8a, hexAddPrefix} from '@polkadot/util'
import {decodeAddress} from '@polkadot/util-crypto'
import {randomHex} from './lib/hex'
import {pruntime_rpc} from './proto'

export type CertificateData = {
  certificate: pruntime_rpc.ICertificate
  pubkey: Uint8Array
  secret: Uint8Array
}

export const signCertificate = async ({
  api,
  address,
  signer,
}: {
  api: ApiPromise
  address: string
  signer: Signer
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

  const signerResult = await signer.signRaw?.({
    address,
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
            pubkey: u8aToHex(decodeAddress(address)),
            ttl: 0x7fffffff, // FIXME: max ttl is not safe
            config_bits: 0,
          })
          .toU8a(),
        signature: null,
      },
      signature_type: pruntime_rpc.SignatureType.Sr25519WrapBytes,
      signature: hexToU8a(signerResult.signature),
    },
  }

  return {
    certificate,
    pubkey,
    secret,
  }
}
