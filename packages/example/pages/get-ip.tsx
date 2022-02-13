import type {ApiPromise} from '@polkadot/api'
import {createApi} from 'lib/polkadotApi'
import {useCallback, useEffect, useRef, useState} from 'react'
import {create, signCertificate, CertificateData} from '@phala/sdk'
import {Button} from 'baseui/button'
import {useAtom} from 'jotai'
import {atomWithStorage} from 'jotai/utils'
import accountAtom from 'atoms/account'
import {getSigner} from 'lib/polkadotExtension'
import {ButtonGroup} from 'baseui/button-group'
import {FormControl} from 'baseui/form-control'
import {Input} from 'baseui/input'
import {ContractPromise} from '@polkadot/api-contract'
import {Contract} from '@polkadot/api-contract/base/Contract'
import {Textarea} from 'baseui/textarea'
import {toaster} from 'baseui/toast'
import ClientOnly from '../components/ClientOnly'

const baseURL = '/'

const contractIdAtom = atomWithStorage<string>('getIPContractId', '')

const metadataStringAtom = atomWithStorage<string>('getIPMetadataString', '')

const GetIP: Page = () => {
  const [account] = useAtom(accountAtom)
  const [contractId, setContractId] = useAtom(contractIdAtom)
  const [metadataString, setMetadataString] = useAtom(metadataStringAtom)
  const [certificateData, setCertificateData] = useState<CertificateData>()
  const [api, setApi] = useState<ApiPromise>()
  const [contract, setContract] = useState<Contract<'promise'>>()
  const unsubscribe = useRef<() => void>()

  const loadContract = async () => {
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

  const onQuery = async () => {
    if (!certificateData || !contract) return
    const {output} = await contract.query.getIp(
      certificateData as any as string,
      {}
    )
    // eslint-disable-next-line no-console
    console.log(output?.toHuman())
    toaster.info(JSON.stringify(output?.toHuman()), {})
  }

  // const onCommand = async () => {
  //   if (!contract || !account) return
  //   const signer = await getSigner(account)
  //   contract.tx.flip({}).signAndSend(account.address, {signer}, (status) => {
  //     if (status.isInBlock) {
  //       toaster.positive('In Block', {})
  //     }
  //   })
  // }

  return (
    <div>
      <FormControl label="Contract Id">
        <ClientOnly>
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
        </ClientOnly>
      </FormControl>
      <FormControl label="ABI">
        <ClientOnly>
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
        </ClientOnly>
      </FormControl>
      <ButtonGroup>
        <Button onClick={loadContract}>Load Contract</Button>
        <Button disabled={!contract} onClick={onSignCertificate}>
          Sign Certificate
        </Button>
        <Button disabled={!certificateData} onClick={onQuery}>
          Get IP
        </Button>
        {/* <Button disabled={!contract} onClick={onCommand}>
          Get IP
        </Button> */}
      </ButtonGroup>
    </div>
  )
}

GetIP.title = 'Get IP'

export default GetIP
