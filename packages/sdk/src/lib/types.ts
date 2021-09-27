export const types = {
  ContractId: 'H256',
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
}
