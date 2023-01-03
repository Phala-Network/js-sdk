interface ClusterInfo {
  owner: AccountId,
  // @fixme
  permission: "Public" | string
  systemContract?: string
  workers: string[]
}

interface ContractInfo {
  cluster: string
  codeIndex: {
    wasmCode: string
  }
  deployer: AccountId
  pubkey: string
}

interface EndpointInfo {
  V1: string[]
}