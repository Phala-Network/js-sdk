import type {ApiPromise} from '@polkadot/api'
import {createApi} from 'lib/polkadotApi'
import {useCallback, useEffect, useRef, useState} from 'react'
import {create, signCertificate, CertificateData} from '@phala/sdk'
import {Button} from 'baseui/button'
import {useAtom} from 'jotai'
import accountAtom from 'atoms/account'
import {getSigner} from 'lib/polkadotExtension'
import {ButtonGroup} from 'baseui/button-group'
import {FormControl} from 'baseui/form-control'
import {Input} from 'baseui/input'
import {ContractPromise} from '@polkadot/api-contract'
import contractMetadata from 'lib/metadata.json'
import {Textarea} from 'baseui/textarea'
import {toaster} from 'baseui/toast'

const baseURL = '/'

const Template: Page = () => {
  const [account] = useAtom(accountAtom)
  const [contractId, setContractId] = useState(
    '0xcf4b9fd7eb64dc1fe5ca550e715a49fae9f5a2de88afd3c32daa137fcc8ca5b7'
  )
  const [metadataString, setMetadataString] = useState(
    JSON.stringify(contractMetadata, null, 2)
  )
  const [certificateData, setCertificateData] = useState<CertificateData>()
  const [api, setApi] = useState<ApiPromise>()
  const [contract, setContract] = useState<ContractPromise>()
  const unsubscribe = useRef<() => void>()

  const createContract = async () => {
    try {
      const api = await createApi({
        endpoint: process.env.NEXT_PUBLIC_WS_ENDPOINT,
      })
      setApi(api)
      const flipContract = new ContractPromise(
        await create({api, baseURL, contractId}),
        JSON.parse(metadataString),
        contractId
      )
      setContract(flipContract)
      toaster.positive('Contract created', {})
    } catch (err) {
      toaster.negative((err as Error).message, {})
    }
  }

  useEffect(() => {
    const _unsubscribe = unsubscribe.current
    return () => {
      api?.disconnect()
      _unsubscribe?.()
    }
  }, [api])

  useEffect(() => {
    setCertificateData(undefined)
  }, [account])

  const onSignCertificate = useCallback(async () => {
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
  }, [api, account])

  const onQuery = () => {
    if (!certificateData || !contract) return
    contract.query.get(certificateData as any as string, {}).then((res) => {
      toaster.info(JSON.stringify(res.output?.toHuman()), {})
    })
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

  return (
    <div>
      <FormControl label="Contract Id">
        <Input
          overrides={{
            Input: {
              style: {
                fontFamily: 'monospace',
              },
            },
          }}
          autoFocus
          value={contractId}
          onChange={(e) => setContractId(e.currentTarget.value)}
        ></Input>
      </FormControl>
      <FormControl label="ABI">
        <Textarea
          overrides={{
            Input: {
              style: {
                fontFamily: 'monospace',
                height: '600px',
              },
            },
          }}
          value={metadataString}
          onChange={(e) => setMetadataString(e.currentTarget.value)}
        ></Textarea>
      </FormControl>
      <ButtonGroup>
        <Button onClick={createContract}>Create Contract</Button>
        <Button disabled={!contract} onClick={onSignCertificate}>
          Sign Certificate
        </Button>
        <Button disabled={!certificateData} onClick={onQuery}>
          Get
        </Button>
        <Button disabled={!contract} onClick={onCommand}>
          Flip
        </Button>
      </ButtonGroup>
    </div>
  )
}

Template.title = 'Template'

export default Template
