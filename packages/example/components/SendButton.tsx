import {ApiPromise, Keyring} from '@polkadot/api'
import accountAtom from 'atoms/account'
import {Button} from 'baseui/button'
import {DURATION, useSnackbar} from 'baseui/snackbar'
import {useAtomValue} from 'jotai'
import {createApi} from 'lib/polkadotApi'
import {FC, useEffect, useState} from 'react'

const SendButton: FC = () => {
  const [api, setApi] = useState<ApiPromise>()
  const account = useAtomValue(accountAtom)
  const {enqueue, dequeue} = useSnackbar()

  useEffect(() => {
    createApi('wss://poc5.phala.network/ws').then(setApi)
  }, [])

  const send = async () => {
    if (!api || !account) return
    const keyring = new Keyring({type: 'sr25519'})
    const alice = keyring.addFromUri('//Alice')
    enqueue(
      {message: 'Waiting for confirmation...', progress: true},
      DURATION.infinite
    )
    const unsub = await api.tx.balances
      .transfer(account.address, '10000000000000')
      .signAndSend(alice, ({isInBlock}) => {
        if (isInBlock) {
          dequeue()
          enqueue({message: 'Success'})
          unsub()
        }
      })
  }

  return (
    <Button kind="secondary" onClick={send}>
      Get 10 PHA
    </Button>
  )
}

export default SendButton
