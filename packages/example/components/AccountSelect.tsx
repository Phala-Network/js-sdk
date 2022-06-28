import type {InjectedAccountWithMeta} from '@polkadot/extension-inject/types'
import {Block} from 'baseui/block'
import {FormControl} from 'baseui/form-control'
import {Select} from 'baseui/select'
import {LabelSmall, MonoParagraphXSmall} from 'baseui/typography'
import {useAtom} from 'jotai'
import {useEffect, useState} from 'react'
import accountAtom from '../atoms/account'
import {enablePolkadotExtension} from '../lib/polkadotExtension'
import SendButton from './SendButton'

const trimAddress = (address: string) =>
  `${address.slice(0, 6)}…${address.slice(-6)}`

const AccountSelect = (): JSX.Element => {
  const [error, setError] = useState(false)
  const [account, setAccount] = useAtom(accountAtom)
  const [options, setOptions] = useState<InjectedAccountWithMeta[]>([])

  useEffect(() => {
    let unsubscribe: () => void

    const subscribeAccounts = async () => {
      await enablePolkadotExtension()
      const handleAccounts = (accounts: InjectedAccountWithMeta[]): void => {
        setOptions(accounts)
      }
      const {web3Accounts, web3AccountsSubscribe} = await import(
        '@polkadot/extension-dapp'
      )
      const accounts = await web3Accounts()
      handleAccounts(accounts)
      unsubscribe = await web3AccountsSubscribe(handleAccounts)
    }

    try {
      subscribeAccounts()
    } catch (err) {
      setError(true)
      throw err
    }

    return () => unsubscribe?.()
  }, [])

  useEffect(() => {
    if (
      account &&
      options.length &&
      !options.find(({address}) => address === account.address)
    ) {
      setAccount(null)
    }
  }, [options, account, setAccount])

  return (
    <Block marginLeft="20px" flex="none" display="flex" alignItems="center">
      <FormControl
        disabled={error}
        overrides={{
          ControlContainer: {
            style: {
              marginBottom: 0,
            },
          },
        }}
        {...(error && {error: 'Polkadot{.js} extension error'})}
      >
        <Select
          size="compact"
          placeholder="Select Account"
          options={options}
          getOptionLabel={({option}) =>
            option && (
              <>
                <LabelSmall>{option.meta.name || 'Unknown'}</LabelSmall>
                <MonoParagraphXSmall as="div">
                  {trimAddress(option.address)}
                </MonoParagraphXSmall>
              </>
            )
          }
          getValueLabel={({option}) => (
            <>
              <LabelSmall>{option.meta.name}</LabelSmall>
              <MonoParagraphXSmall as="div">
                {trimAddress(option.address)}
              </MonoParagraphXSmall>
            </>
          )}
          searchable={false}
          valueKey="address"
          value={account ? [account] : []}
          onChange={({value}) =>
            setAccount((value[0] as InjectedAccountWithMeta) || null)
          }
          overrides={{Root: {style: {width: '200px'}}}}
        ></Select>
      </FormControl>

      <Block
        flex="none"
        marginLeft="scale200"
        display={account ? 'block' : 'none'}
      >
        <SendButton />
      </Block>
    </Block>
  )
}

export default AccountSelect
