import {khalaDev} from '@phala/typedefs'
import {ApiPromise, WsProvider} from '@polkadot/api'
import {types as phalaSDKTypes} from '@phala/sdk'
import {RegistryTypes} from '@polkadot/types/types'

export const createApi = async ({
  endpoint,
  types,
}: {
  endpoint: string
  types?: RegistryTypes
}): Promise<ApiPromise> => {
  const wsProvider = new WsProvider(endpoint)

  const api = await ApiPromise.create({
    provider: wsProvider,
    types: {
      ...khalaDev,
      ...phalaSDKTypes,
      ...types,
    },
  })

  return api
}
