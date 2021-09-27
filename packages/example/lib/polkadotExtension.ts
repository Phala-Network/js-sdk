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
