import {useState, useEffect} from 'react'
import {useAtom} from 'jotai'
import {Select} from 'baseui/select'
import {LabelSmall, MonoParagraphXSmall} from 'baseui/typography'
import {Block} from 'baseui/block'
import {FormControl} from 'baseui/form-control'
import type {InjectedAccountWithMeta} from '@polkadot/extension-inject/types'
import {enablePolkadotExtension} from 'lib/polkadotExtension'
import accountAtom from 'atoms/account'

const trimAddress = (address: string) =>
  `${address.slice(0, 6)}…${address.slice(-6)}`

const AccountSelect = (): JSX.Element => {
  const [error, setError] = useState(false)
  const [account, setAccount] = useAtom(accountAtom)
  const [options, setOptions] = useState<InjectedAccountWithMeta[]>([])

  useEffect(() => {
    let unsubscribe: () => void

    enablePolkadotExtension()
      .then(async () => {
        const handleAccounts = (accounts: InjectedAccountWithMeta[]): void => {
          setOptions(accounts)
        }
        const {web3Accounts, web3AccountsSubscribe} = await import(
          '@polkadot/extension-dapp'
        )
        const accounts = await web3Accounts()
        handleAccounts(accounts)
        unsubscribe = await web3AccountsSubscribe(handleAccounts)
      })
      .catch(() => {
        setError(true)
      })

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
    <Block padding="0 20px" flex="0">
      <FormControl
        disabled={error}
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
    </Block>
  )
}

export default AccountSelect
