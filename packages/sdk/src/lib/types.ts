import {RegistryTypes} from '@polkadot/types/types'

export const types: RegistryTypes = {
  ContractId: 'H256',
  EcdhPublicKey: 'SpCoreSr25519Public',
  ContractQueryHead: {
    id: 'ContractId',
    nonce: '[u8; 32]',
  },
  CertificateBody: {
    pubkey: 'Vec<u8>',
    ttl: 'u32',
    config_bits: 'u32',
  },
  EncryptedData: {
    iv: '[u8; 12]',
    pubkey: 'EcdhPublicKey',
    data: 'Vec<u8>',
  },
  CommandPayload: {
    _enum: {
      Plain: null, // disable plain
      Encrypted: 'EncryptedData',
    },
  },
  InkQueryData: {
    _enum: {
      InkMessage: 'Vec<u8>',
      SidevmMessage: 'Vec<u8>',
    },
  },
  InkQuery: {
    head: 'ContractQueryHead',
    data: 'InkQueryData',
  },
  InkQueryError: {
    _enum: {
      BadOrigin: null,
      RuntimeError: 'String',
    },
  },
  InkQueryOk: {
    _enum: {
      InkMessageReturn: 'Vec<u8>',
    },
  },
  InkResponse: {
    nonce: '[u8; 32]',
    result: 'Result<InkQueryOk, InkQueryError>',
  },
  InkMessage: {
    nonce: 'Vec<u8>',
    message: 'Vec<u8>',
  },
  InkCommand: {_enum: {InkMessage: 'InkMessage'}},
}
