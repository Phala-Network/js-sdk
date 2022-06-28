import {CertificateData, signCertificate} from '@phala/sdk'
import type {ApiPromise} from '@polkadot/api'
import {ContractPromise} from '@polkadot/api-contract'
import {Button} from 'baseui/button'
import {ButtonGroup} from 'baseui/button-group'
import {Spinner} from 'baseui/spinner'
import {toaster} from 'baseui/toast'
import {useAtom} from 'jotai'
import {loadContract} from 'lib/contract'
import {useEffect, useState} from 'react'
import fat_badges_metadata from '../assets/fat_badges.metadata.json'
import accountAtom from '../atoms/account'
import {getSigner} from '../lib/polkadotExtension'

const Flipper: Page = () => {
  const [account] = useAtom(accountAtom)
  const [certificateData, setCertificateData] = useState<CertificateData>()
  const [api, setApi] = useState<ApiPromise>()
  const [contract, setContract] = useState<ContractPromise>()

  useEffect(
    () => () => {
      api?.disconnect()
    },
    [api]
  )

  useEffect(() => {
    setCertificateData(undefined)
  }, [account])

  useEffect(() => {
    loadContract(
      '0x083872054018c5b1890b8a901fc4213a385e3e4df5ddcc71405e4000e4244c6c',
      fat_badges_metadata
    ).then((res) => {
      setApi(res.api)
      setContract(res.contract)
    })
  }, [])

  const onSignCertificate = async () => {
    if (account && api) {
      try {
        const signer = await getSigner(account)

        // Save certificate data to state, or anywhere else you want like local storage
        setCertificateData(
          await signCertificate({
            api,
            account,
            signer,
          })
        )
        toaster.positive('Certificate signed', {})
      } catch (err) {
        toaster.negative((err as Error).message, {})
      }
    }
  }

  const onQuery = async () => {
    if (!certificateData || !contract) return
    const {output} = await contract.query.get(certificateData as any, {})
    // eslint-disable-next-line no-console
    console.log(output?.toHuman())
    toaster.info(JSON.stringify(output?.toHuman()), {})
  }

  const onCommand = async () => {
    if (!contract || !account) return
    const signer = await getSigner(account)
    contract.tx.flip({}).signAndSend(account.address, {signer}, (status) => {
      if (status.isInBlock) {
        toaster.positive('In Block', {})
      }
    })
  }

  if (!contract) {
    return <Spinner />
  }

  return (
    <ButtonGroup>
      <Button disabled={!account} onClick={onSignCertificate}>
        Sign Certificate
      </Button>
      <Button disabled={!certificateData} onClick={onQuery}>
        Get
      </Button>
      <Button disabled={!account} onClick={onCommand}>
        Flip
      </Button>
    </ButtonGroup>
  )
}

Flipper.title = 'Flipper'

export default Flipper
