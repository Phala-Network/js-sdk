import type {ApiPromise} from '@polkadot/api'
import {numberToHex, hexAddPrefix} from '@polkadot/util'
import {createApi} from 'lib/polkadotApi'
import {useCallback, useEffect, useRef, useState} from 'react'
import {
  create as createPhala,
  randomHex,
  signCertificate,
  CertificateData,
  PhalaInstance,
} from '@phala/sdk'
import {Button} from 'baseui/button'
import {useAtom} from 'jotai'
import accountAtom from 'atoms/account'
import {getSigner} from 'lib/polkadotExtension'
import {LabelXSmall} from 'baseui/typography'
import {StyledSpinnerNext} from 'baseui/spinner'
import {Block} from 'baseui/block'
import {ButtonGroup} from 'baseui/button-group'

const CONTRACT_ID = 1
const baseURL = '/'

const Template: Page = () => {
  const [account] = useAtom(accountAtom)
  const [certificateData, setCertificateData] = useState<CertificateData>()
  const [api, setApi] = useState<ApiPromise>()
  const [phala, setPhala] = useState<PhalaInstance>()
  const unsubscribe = useRef<() => void>()

  useEffect(() => {
    // Create a polkaDot API instance with custom types
    createApi({
      endpoint: process.env.NEXT_PUBLIC_WS_ENDPOINT as string,
      types: {
        TemplateRequestData: {_enum: {Foo: null}},
        TemplateResponseData: {
          _enum: {Bar: null},
        },
        TemplateRequest: {
          head: 'ContractQueryHead',
          data: 'TemplateRequestData',
        },
        TemplateResponse: {
          nonce: '[u8; 32]',
          result: 'Result<TemplateResponseData>',
        },
        TemplateCommand: {_enum: {Foo: null}},
      },
    }).then((api) => {
      setApi(api)

      // Create a Phala instance
      return createPhala({api, baseURL}).then((phala) => {
        setPhala(() => phala)
      })
    })
  }, [])

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
      const signer = await getSigner(account)

      // Save certificate data to state, or anywhere else you want like local storage
      setCertificateData(
        await signCertificate({
          api,
          account,
          signer,
        })
      )
    }
  }, [api, account])

  const onQuery = useCallback(() => {
    if (!phala || !api || !certificateData) return
    // Create query body
    const encodedQuery = api
      .createType('TemplateRequest', {
        head: {
          id: numberToHex(CONTRACT_ID, 256),
          nonce: hexAddPrefix(randomHex(32)),
        },
        data: {foo: null},
      })
      .toHex()

    // Send query request with saved certificate data
    phala.query(encodedQuery, certificateData).then((data) => {
      // Decode response
      const {
        result: {ok: result},
      } = api.createType('TemplateResponse', hexAddPrefix(data)).toJSON() as {
        result: {ok: {bar: null}}
      }

      // Do something with the result
    })
  }, [phala, api, certificateData])

  const onCommand = useCallback(async () => {
    if (!phala || !api || !account) return
    const signer = await getSigner(account)
    const _unsubscribe = await phala.command({
      account,
      contractId: CONTRACT_ID,
      // Create your payload
      payload: api.createType('TemplateCommand', {Foo: null}).toHex(),
      signer,
      onStatus: (status) => {
        if (status.isFinalized) {
          // Do something
        }
      },
    })

    if (_unsubscribe) {
      unsubscribe.current = _unsubscribe
    }
  }, [phala, api, account])

  return (
    <div>
      {Boolean(api && phala) ? (
        <ButtonGroup>
          <Button onClick={onSignCertificate}>Sign Certificate</Button>
          <Button onClick={onQuery}>Query</Button>
          <Button onClick={onCommand}>Command</Button>
        </ButtonGroup>
      ) : (
        <Block
          display="flex"
          flexDirection="column"
          alignItems="center"
          height="280px"
          justifyContent="center"
        >
          <StyledSpinnerNext />
          <LabelXSmall marginTop="20px">Initializing</LabelXSmall>
        </Block>
      )}
    </div>
  )
}

Template.title = 'Template'

export default Template
