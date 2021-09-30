import type {ApiPromise} from '@polkadot/api'
import {numberToHex, hexAddPrefix} from '@polkadot/util'
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
import {useStyletron} from 'styletron-react'

const baseURL = '/'
const CONTRACT_ID = 100

const GuessNumber: Page = () => {
  const [account] = useAtom(accountAtom)
  const [number, setNumber] = useState('')
  const [certificateData, setCertificateData] = useState<CertificateData>()
  const [api, setApi] = useState<ApiPromise>()
  const [phala, setPhala] = useState<PhalaInstance>()
  const [signCertificateLoading, setSignCertificateLoading] = useState(false)
  const [guessLoading, setGuessLoading] = useState(false)
  const unsubscribe = useRef<() => void>()
  const [css] = useStyletron()

  useEffect(() => {
    createApi({
      endpoint: process.env.NEXT_PUBLIC_WS_ENDPOINT as string,
      types: {
        Guess: {guess_number: 'u32'},
        GuessNumberRequestData: {_enum: {Guess: 'Guess', Reveal: null}},
        GuessNumberResponseData: {
          _enum: {TooLarge: null, ToSmall: null, Correct: null, Answer: 'u32'},
        },
        GuessNumberRequest: {
          head: 'ContractQueryHead',
          data: 'GuessNumberRequestData',
        },
        GuessNumberResponse: {
          nonce: '[u8; 32]',
          result: 'Result<GuessNumberResponseData>',
        },
        GuessNumberCommand: {_enum: ['NextRandom']},
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
      setSignCertificateLoading(true)
      try {
        const signer = await getSigner(account)
        setCertificateData(
          await signCertificate({
            api,
            address: account.address,
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

  const onGuess = useCallback<FormEventHandler<HTMLFormElement>>(
    (e) => {
      e.preventDefault()
      if (!phala || !api || !certificateData) return
      setGuessLoading(true)
      const encodedQuery = api
        .createType('GuessNumberRequest', {
          head: {
            id: numberToHex(CONTRACT_ID, 256),
            nonce: hexAddPrefix(randomHex(32)),
          },
          data: {
            guess: {
              guess_number: Number(number),
            },
          },
        })
        .toHex()

      phala
        .query(encodedQuery, certificateData)
        .then((data) => {
          const {
            result: {ok},
          } = api
            .createType('GuessNumberResponse', hexAddPrefix(data))
            .toJSON() as any
          const result = Object.keys(ok)[0] as
            | 'correct'
            | 'tooSmall'
            | 'tooLarge'

          if (result === 'correct') {
            toaster.positive('Correct! Number has been reset', {})
            setNumber('')
          } else {
            toaster.info(result, {})
          }
        })
        .catch((err) => {
          toaster.negative((err as Error).message, {})
        })
        .finally(() => {
          setGuessLoading(false)
        })
    },
    [phala, api, number, certificateData]
  )

  const onReveal = useCallback(() => {
    if (!phala || !api || !certificateData) return
    const encodedQuery = api
      .createType('GuessNumberRequest', {
        head: {
          id: numberToHex(100, 256),
          nonce: hexAddPrefix(randomHex(32)),
        },
        data: {reveal: null},
      })
      .toHex()

    const toastKey = toaster.info('Cheating…', {autoHideDuration: 0})

    phala
      .query(encodedQuery, certificateData)
      .then((data) => {
        const {
          result: {ok: result},
        } = api
          .createType('GuessNumberResponse', hexAddPrefix(data))
          .toJSON() as {
          result: {ok: {answer: number}}
        }
        toaster.update(toastKey, {
          children: `Current number is ${result.answer}`,
          autoHideDuration: 3000,
        })
      })
      .catch((err) => {
        toaster.clear(toastKey)
        toaster.negative((err as Error).message, {})
      })
  }, [phala, api, certificateData])

  const onReset = useCallback(async () => {
    if (!phala || !api || !account) return
    const toastKey = toaster.info('Resetting…', {autoHideDuration: 0})
    const signer = await getSigner(account)
    const _unsubscribe = await phala
      .command({
        account,
        contractId: CONTRACT_ID,
        payload: api
          .createType('GuessNumberCommand', {NextRandom: null})
          .toHex(),
        signer,
        onStatus: (status) => {
          if (status.isFinalized) {
            toaster.update(toastKey, {
              children: 'Number has been reset',
              autoHideDuration: 3000,
            })
          }
        },
      })
      .catch((err) => {
        toaster.clear(toastKey)
        toaster.negative((err as Error).message, {})
      })

    if (_unsubscribe) {
      unsubscribe.current = _unsubscribe
    }
  }, [phala, api, account])

  return (
    <div>
      {Boolean(api && phala) ? (
        <>
          <ProgressSteps
            current={certificateData ? 1 : 0}
            overrides={{
              Root: {
                style: {width: '100%'},
              },
            }}
          >
            <Step title="Sign Certificate">
              <ParagraphMedium>
                Click to sign a certificate first.
              </ParagraphMedium>
              <Button
                isLoading={signCertificateLoading}
                onClick={onSignCertificate}
                disabled={!account}
              >
                Sign Certificate
              </Button>
            </Step>
            <Step title="Play">
              <div>
                <form
                  onSubmit={onGuess}
                  className={css({
                    display: 'flex',
                    alignItems: 'flex-start',
                  })}
                >
                  <FormControl
                    caption="u32 from 0 to 4,294,967,295"
                    overrides={{ControlContainer: {style: {width: '400px'}}}}
                  >
                    <Input
                      autoFocus
                      type="number"
                      value={number}
                      min={0}
                      max={4294967295}
                      step={1}
                      onChange={(e) => setNumber(e.currentTarget.value)}
                    ></Input>
                  </FormControl>
                  <Button
                    $style={{marginLeft: '15px'}}
                    type="submit"
                    disabled={!number}
                    isLoading={guessLoading}
                  >
                    Guess
                  </Button>
                </form>

                <Block>
                  <ButtonGroup size="mini">
                    <Button onClick={onReset}>Reset Number</Button>
                    <Button onClick={onReveal}>↑↑↓↓←→←→BA</Button>
                  </ButtonGroup>
                </Block>
              </div>
            </Step>
          </ProgressSteps>
        </>
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

GuessNumber.title = 'Guess Number'

export default GuessNumber
