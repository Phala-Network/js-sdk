import { CertificateData, signCertificate } from '@phala/sdk'
import type { ApiPromise } from '@polkadot/api'
import { ContractPromise } from '@polkadot/api-contract'
import { Button } from 'baseui/button'
import { ButtonGroup } from 'baseui/button-group'
import { toaster } from 'baseui/toast'
import { useAtom } from 'jotai'
import { useEffect, useState } from 'react'
import { default as account, default as accountAtom } from '../atoms/account'
import ContractLoader from '../components/ContractLoader'
import { getSigner } from '../lib/polkadotExtension'

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
    if (!contract || !account || !certificateData) return
    const signer = await getSigner(account)

    const { gasRequired, storageDeposit } = await contract.query.flip(certificateData as any, {});
    console.log("gasRequired:", gasRequired.toJSON())
    console.log("storageDeposit:", storageDeposit.asCharge.toJSON())
    const options = {
      // value: 0,
      gasLimit: (gasRequired as any).refTime,
      storageDepositLimit: storageDeposit.isCharge ? storageDeposit.asCharge : null
    }

    contract.tx.flip(options).signAndSend(account.address, {signer}, (status) => {
      console.log('status', status)
      if (status.isInBlock) {
        toaster.positive('In Block', {})
      }
      if (status.isCompleted) {
        toaster.positive('Completed', {})
      }
    })
  }

  return contract ? (
    <>
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
    </>
  ) : (
    <ContractLoader
      name="flipper"
      onLoad={({api, contract}) => {
        setApi(api)
        setContract(contract)
      }}
    />
  )
}

Flipper.title = 'Flipper'

export default Flipper
