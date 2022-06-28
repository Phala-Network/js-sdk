import {create} from '@phala/sdk'
import {ContractPromise} from '@polkadot/api-contract'
import {createApi} from './polkadotApi'

export const loadContract = async (
  contractId: string,
  metadata: Record<string, unknown>
) => {
  const endpoint = 'wss://poc5.phala.network/ws'
  const pruntimeURL = 'https://poc5.phala.network/tee-api-1'
  const api = await createApi(endpoint)
  const contract = new ContractPromise(
    await create({api, baseURL: pruntimeURL, contractId}),
    metadata,
    contractId
  )

  return {contract, api}
}
