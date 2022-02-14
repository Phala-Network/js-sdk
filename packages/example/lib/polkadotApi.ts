import {khalaDev} from '@phala/typedefs'
import {ApiPromise, WsProvider} from '@polkadot/api'
import {types as phalaSDKTypes} from '@phala/sdk'

export const createApi = async (): Promise<ApiPromise> => {
  const wsProvider = new WsProvider(process.env.NEXT_PUBLIC_WS_ENDPOINT)

  const api = await ApiPromise.create({
    provider: wsProvider,
    types: {
      ...khalaDev,
      ...phalaSDKTypes,
    },
  })

  return api
}
