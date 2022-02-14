import type {ApiPromise} from '@polkadot/api'
import {ContractPromise} from '@polkadot/api-contract'
import {useEffect, useState} from 'react'
import {signCertificate, CertificateData} from '@phala/sdk'
import {Button} from 'baseui/button'
import {ButtonGroup} from 'baseui/button-group'
import {toaster} from 'baseui/toast'
import {useAtom} from 'jotai'
import accountAtom from '../atoms/account'
import {getSigner} from '../lib/polkadotExtension'
import ContractLoader from '../components/ContractLoader'

const Flipper: Page = () => {
  const [account] = useAtom(accountAtom)
  const [certificateData, setCertificateData] = useState<CertificateData>()
  const [api, setApi] = useState<ApiPromise>()
  const [contract, setContract] = useState<ContractPromise>()

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
    const {output} = await contract.query.get(
      certificateData as any as string,
      {}
    )
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
      contractKey="flipper"
      onLoad={({api, contract}) => {
        setApi(api)
        setContract(contract)
      }}
    />
  )
}

Flipper.title = 'Flipper'

export default Flipper
