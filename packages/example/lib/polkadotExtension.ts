import type {InjectedAccountWithMeta} from '@polkadot/extension-inject/types'
import {Signer} from '@polkadot/types/types'

let enablePolkadotExtensionCache: Promise<void>
export const enablePolkadotExtension = async (): Promise<void> => {
  if (enablePolkadotExtensionCache) return enablePolkadotExtensionCache

  enablePolkadotExtensionCache = import('@polkadot/extension-dapp').then(
    async ({web3Enable}) => {
      const extensions = await web3Enable('Phala SDK Example')

      if (extensions.length === 0) {
        throw new Error(
          'No extension installed, or the user did not accept the authorization'
        )
      }
    }
  )

  return enablePolkadotExtensionCache
}

export const getSigner = async (
  account: InjectedAccountWithMeta
): Promise<Signer> => {
  await enablePolkadotExtension()
  const {web3FromSource} = await import('@polkadot/extension-dapp')
  const injector = await web3FromSource(account.meta.source)
  const signer = injector.signer

  return signer
}
