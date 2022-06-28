import {ApiPromise, Keyring} from '@polkadot/api'
import accountAtom from 'atoms/account'
import {Button} from 'baseui/button'
import {toaster} from 'baseui/toast'
import {useAtomValue} from 'jotai'
import {createApi} from 'lib/polkadotApi'
import {FC, useEffect, useState} from 'react'

const SendButton: FC = () => {
  const [api, setApi] = useState<ApiPromise>()
  const account = useAtomValue(accountAtom)

  useEffect(() => {
    createApi('wss://poc5.phala.network/ws').then(setApi)
  }, [])

  const send = async () => {
    if (!api || !account) return
    const keyring = new Keyring({type: 'sr25519'})
    const alice = keyring.addFromUri('//Alice')
    const key = toaster.info('Sending...', {autoHideDuration: 0})
    const unsub = await api.tx.balances
      .transfer(account.address, '10000000000000')
      .signAndSend(alice, ({isInBlock, isError}) => {
        if (isInBlock) {
          toaster.clear(key)
          toaster.positive('Success', {})
          unsub()
        }

        if (isError) {
          toaster.clear(key)
          toaster.negative('Failed', {})
          unsub()
        }
      })
  }

  return (
    <Button
      kind="tertiary"
      size="mini"
      onClick={send}
      $style={{
        position: 'absolute',
        right: 0,
        bottom: '-30px',
      }}
    >
      Get 10 PHA
    </Button>
  )
}

export default SendButton
