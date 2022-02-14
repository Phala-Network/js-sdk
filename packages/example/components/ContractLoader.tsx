import type {ApiPromise} from '@polkadot/api'
import {ContractPromise} from '@polkadot/api-contract'
import {create} from '@phala/sdk'
import {Button} from 'baseui/button'
import {FormControl} from 'baseui/form-control'
import {Input} from 'baseui/input'
import {Textarea} from 'baseui/textarea'
import {toaster} from 'baseui/toast'
import {useAtom} from 'jotai'
import {atomWithStorage} from 'jotai/utils'
import {focusAtom} from 'jotai/optics'
import {useRef, VFC} from 'react'
import useIsClient from '../hooks/useIsClient'
import {createApi} from '../lib/polkadotApi'

const baseURL = '/'

const contractsAtom = atomWithStorage<
  Record<string, {contractId: string; metadata: string}>
>('atom:contracts', {})

const ContractLoader: VFC<{
  contractKey: string
  onLoad: (res: {api: ApiPromise; contract: ContractPromise}) => void
}> = ({contractKey, onLoad}) => {
  const contractInfoAtom = useRef(
    focusAtom(contractsAtom, (optic) => optic.prop(contractKey))
  )
  const [contractInfo, setContractInfo] = useAtom(contractInfoAtom.current)
  const {contractId = '', metadata = ''} = contractInfo || {}
  const isClient = useIsClient()
  if (!isClient) return null

  const loadContract = async () => {
    try {
      const api = await createApi()
      const contract = new ContractPromise(
        await create({api, baseURL, contractId}),
        JSON.parse(metadata),
        contractId
      )
      onLoad({api, contract})
      toaster.positive('Contract loaded successfully', {})
    } catch (err) {
      toaster.negative((err as Error).message, {})
    }
  }

  return (
    <>
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
          onChange={(e) =>
            setContractInfo((contractInfo) => ({
              ...contractInfo,
              contractId: e.currentTarget.value,
            }))
          }
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
          value={metadata}
          onChange={(e) =>
            setContractInfo((contractInfo) => ({
              ...contractInfo,
              metadata: e.currentTarget.value,
            }))
          }
        ></Textarea>
      </FormControl>

      <Button disabled={!contractId || !metadata} onClick={loadContract}>
        Load Contract
      </Button>
    </>
  )
}

export default ContractLoader