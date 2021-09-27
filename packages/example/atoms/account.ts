import {atomWithStorage} from 'jotai/utils'
import type {InjectedAccountWithMeta} from '@polkadot/extension-inject/types'

const account = atomWithStorage<InjectedAccountWithMeta | null>(
  'atom:account',
  null
)

export default account
