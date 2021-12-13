import type {ApiPromise} from '@polkadot/api'
import {numberToHex, hexAddPrefix, u8aToHex} from '@polkadot/util'
import {createApi} from 'lib/polkadotApi'
import {FormEventHandler, useCallback, useEffect, useRef, useState} from 'react'
import {
  create as createPhala,
  randomHex,
  signCertificate,
  CertificateData,
  PhalaInstance,
} from '@phala/sdk'
import {Input} from 'baseui/input'
import {Button} from 'baseui/button'
import {toaster} from 'baseui/toast'
import {useAtom} from 'jotai'
import accountAtom from 'atoms/account'
import {getSigner} from 'lib/polkadotExtension'
import {FormControl} from 'baseui/form-control'
import {ProgressSteps, Step} from 'baseui/progress-steps'
import {LabelXSmall, ParagraphMedium} from 'baseui/typography'
import {StyledSpinnerNext} from 'baseui/spinner'
import {Block} from 'baseui/block'
import {ButtonGroup} from 'baseui/button-group'
import {decodeAddress} from '@polkadot/util-crypto'

const baseURL = '/'
const CONTRACT_ID = 101

const BTCPriceBot = ({api, phala}: {api: ApiPromise; phala: PhalaInstance}) => {
  const [account] = useAtom(accountAtom)
  const [token, setToken] = useState('')
  const [chatId, setChatId] = useState('')
  const [certificateData, setCertificateData] = useState<CertificateData>()
  const [signCertificateLoading, setSignCertificateLoading] = useState(false)
  const [owner, setOwner] = useState('')
  const unsubscribe = useRef<() => void>()

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
    if (account) {
      setSignCertificateLoading(true)
      try {
        const signer = await getSigner(account)
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
      setSignCertificateLoading(false)
    }
  }, [api, account])

  const query = useCallback(
    (type: 'queryOwner' | 'queryBotToken' | 'queryChatId') => {
      if (!certificateData) return
      const resultKeyMap: Record<typeof type, string> = {
        queryOwner: 'owner',
        queryBotToken: 'botToken',
        queryChatId: 'chatId',
      }
      const encodedQuery = api
        .createType('BotRequest', {
          head: {
            id: numberToHex(CONTRACT_ID, 256),
            nonce: hexAddPrefix(randomHex(32)),
          },
          data: {[type]: null},
        })
        .toHex()

      const toastKey = toaster.info('Querying…', {autoHideDuration: 0})

      phala
        .query(encodedQuery, certificateData)
        .then((data) => {
          const {
            result: {ok, err},
          } = api.createType('BotResponse', hexAddPrefix(data)).toJSON() as any

          if (ok) {
            const result = ok[resultKeyMap[type]]
            toaster.update(toastKey, {
              children: result,
              autoHideDuration: 3000,
            })
          }

          if (err) {
            throw new Error(err)
          }
        })
        .catch((err) => {
          toaster.update(toastKey, {
            kind: 'negative',
            children: (err as Error).message,
            autoHideDuration: 3000,
          })
        })
    },
    [phala, api, certificateData]
  )

  const command = useCallback(
    (
        type: 'SetOwner' | 'SetupBot' | 'ReportBtcPrice'
      ): FormEventHandler<HTMLButtonElement | HTMLFormElement> =>
      async (e) => {
        e?.preventDefault()
        if (!account) return
        const toastKey = toaster.info('Sending…', {autoHideDuration: 0})
        const signer = await getSigner(account)
        try {
          const _unsubscribe = await phala.command({
            account,
            contractId: CONTRACT_ID,
            payload: api
              .createType('BotCommand', {
                [type]:
                  type === 'SetOwner'
                    ? {owner: u8aToHex(decodeAddress(owner))}
                    : type === 'SetupBot'
                    ? {token, chat_id: chatId}
                    : null,
              })
              .toHex(),
            signer,
            onStatus: (status) => {
              if (status.isFinalized) {
                toaster.update(toastKey, {
                  kind: 'positive',
                  children: 'Command Sent',
                  autoHideDuration: 3000,
                })
              }
            },
          })

          if (_unsubscribe) {
            unsubscribe.current = _unsubscribe
          }
        } catch (err) {
          toaster.update(toastKey, {
            kind: 'negative',
            children: (err as Error).message,
            autoHideDuration: 3000,
          })
        }
      },
    [account, api, owner, phala, token, chatId]
  )

  return (
    <ProgressSteps
      current={certificateData ? 1 : 0}
      overrides={{
        Root: {
          style: {width: '100%'},
        },
      }}
    >
      <Step title="Sign Certificate">
        <ParagraphMedium>Click to sign a certificate first.</ParagraphMedium>
        <Button
          isLoading={signCertificateLoading}
          onClick={onSignCertificate}
          disabled={!account}
        >
          Sign Certificate
        </Button>
      </Step>
      <Step title="Setup Bot">
        <div>
          <form onSubmit={command('SetupBot')}>
            <FormControl label="Bot Token">
              <Input
                autoFocus
                value={token}
                onChange={(e) => setToken(e.currentTarget.value)}
                overrides={{Root: {style: {width: '500px'}}}}
              ></Input>
            </FormControl>

            <FormControl label="Chat Id">
              <Input
                value={chatId}
                onChange={(e) => setChatId(e.currentTarget.value)}
                overrides={{Root: {style: {width: '500px'}}}}
              ></Input>
            </FormControl>

            <Button type="submit" disabled={!token || !chatId}>
              Setup
            </Button>
          </form>

          <Button
            overrides={{Root: {style: {margin: '16px 0'}}}}
            onClick={command('ReportBtcPrice')}
          >
            Report BTC Price
          </Button>

          <form onSubmit={command('SetOwner')}>
            <FormControl label="Set Owner">
              <Input
                value={owner}
                onChange={(e) => setOwner(e.currentTarget.value)}
                overrides={{Root: {style: {width: '500px'}}}}
              ></Input>
            </FormControl>
            <Button type="submit" disabled={!owner}>
              Set
            </Button>
          </form>

          <Block marginTop="16px">
            <ButtonGroup size="mini">
              <Button onClick={() => query('queryOwner')}>Query Owner</Button>
              <Button onClick={() => query('queryBotToken')}>
                Query Bot Token
              </Button>
              <Button onClick={() => query('queryChatId')}>
                Query Chat Id
              </Button>
            </ButtonGroup>
          </Block>
        </div>
      </Step>
    </ProgressSteps>
  )
}

const BTCPriceBotPage: Page = () => {
  const [api, setApi] = useState<ApiPromise>()
  const [phala, setPhala] = useState<PhalaInstance>()

  useEffect(() => {
    createApi({
      endpoint: process.env.NEXT_PUBLIC_WS_ENDPOINT,
      types: {
        ContractOwner: {owner: 'AccountId'},
        SetupBot: {
          token: 'String',
          chat_id: 'String',
        },
        BotError: {
          _enum: ['OriginUnavailable', 'NotAuthorized'],
        },
        BotRequestData: {
          _enum: ['QueryOwner', 'QueryBotToken', 'QueryChatId'],
        },
        BotResponseData: {
          _enum: {
            Owner: 'AccountId',
            BotToken: 'String',
            ChatId: 'String',
          },
        },
        BotRequest: {
          head: 'ContractQueryHead',
          data: 'BotRequestData',
        },
        BotResponse: {
          nonce: '[u8; 32]',
          result: 'Result<BotResponseData, BotError>',
        },
        BotCommand: {
          _enum: {
            SetOwner: 'ContractOwner',
            SetupBot: 'SetupBot',
            ReportBtcPrice: null,
          },
        },
      },
    })
      .then((api) => {
        setApi(api)
        return createPhala({api, baseURL}).then((phala) => {
          setPhala(() => phala)
        })
      })
      .catch((err) => {
        toaster.negative((err as Error).message, {})
      })
  }, [])

  if (api && phala) {
    return <BTCPriceBot api={api} phala={phala} />
  }

  return (
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
  )
}

BTCPriceBotPage.title = 'BTC Price Bot'

export default BTCPriceBotPage
