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

const endpointAtom = atomWithStorage<string>(
  'atom:endpoint',
  'ws://localhost:9944'
)
const pruntimeURLAtom = atomWithStorage<string>(
  'atom:pruntime_url',
  'http://localhost:8000'
)
const contractsAtom = atomWithStorage<
  Record<string, {contractId: string; metadata: string}>
>('atom:contracts', {})

const ContractLoader: VFC<{
  name: string
  onLoad: (res: {api: ApiPromise; contract: ContractPromise}) => void
}> = ({name, onLoad}) => {
  const contractInfoAtom = useRef(
    focusAtom(contractsAtom, (optic) => optic.prop(name))
  )
  const [contractInfo, setContractInfo] = useAtom(contractInfoAtom.current)
  const [endpoint, setEndpoint] = useAtom(endpointAtom)
  const [pruntimeURL, setPruntimeURL] = useAtom(pruntimeURLAtom)
  const {contractId = '', metadata = ''} = contractInfo || {}
  const isClient = useIsClient()
  if (!isClient) return null

  const loadContract = async () => {
    try {
      const api = await createApi(endpoint)
      const contract = new ContractPromise(
        await create({api, baseURL: pruntimeURL, contractId}),
        JSON.parse(metadata),
        contractId
      )
      onLoad({api, contract})
      toaster.positive('Contract loaded successfully', {})
    } catch (err) {
      toaster.negative((err as Error).message, {})
      throw err
    }
  }

  return (
    <>
      <FormControl label="WS Endpoint">
        <Input
          placeholder="ws://localhost:9944"
          overrides={{
            Input: {
              style: {
                fontFamily: 'monospace',
              },
            },
          }}
          value={endpoint}
          onChange={(e) => setEndpoint(e.currentTarget.value)}
        ></Input>
      </FormControl>
      <FormControl label="Pruntime URL">
        <Input
          placeholder="http://localhost:8000"
          overrides={{
            Input: {
              style: {
                fontFamily: 'monospace',
              },
            },
          }}
          value={pruntimeURL}
          onChange={(e) => setPruntimeURL(e.currentTarget.value)}
        ></Input>
      </FormControl>
      <FormControl label="Contract Id">
        <Input
          overrides={{
            Input: {
              style: {
                fontFamily: 'monospace',
              },
            },
          }}
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
