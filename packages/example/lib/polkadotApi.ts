import {khalaDev} from '@phala/typedefs'
import {ApiPromise, WsProvider} from '@polkadot/api'
import {types as phalaSDKTypes} from '@phala/sdk'

export const createApi = async (endpoint: string): Promise<ApiPromise> => {
  const wsProvider = new WsProvider(endpoint)

  const api = await ApiPromise.create({
    provider: wsProvider,
    types: {
      ...khalaDev,
      ...phalaSDKTypes,
    },
  })

  return api
}
