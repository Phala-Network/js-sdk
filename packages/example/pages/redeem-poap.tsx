import {ApiPromise, Keyring} from '@polkadot/api'
import {u8aToHex} from '@polkadot/util'
import {ContractPromise} from '@polkadot/api-contract'
import {Key, useEffect, useRef, useState} from 'react'
import {signCertificate, CertificateData} from '@phala/sdk'
import {Button} from 'baseui/button'
import {Block} from 'baseui/block'
import {Input} from 'baseui/input'
import {toaster} from 'baseui/toast'
import {StyledLink} from 'baseui/link'
import {HeadingMedium, ParagraphSmall} from 'baseui/typography'
import {StatefulPanel} from 'baseui/accordion'
import {useAtom} from 'jotai'
import accountAtom from '../atoms/account'
import {getSigner} from '../lib/polkadotExtension'
import ContractLoader from '../components/ContractLoader'
import {copy} from '../lib/copy'
import useInterval from '../hooks/useInterval'
import {Textarea} from 'baseui/textarea'

const RedeemPOAP: Page = () => {
  const [account] = useAtom(accountAtom)
  const [certificateData, setCertificateData] = useState<CertificateData>()
  const [api, setApi] = useState<ApiPromise>()
  const [contract, setContract] = useState<ContractPromise>()

  const [gist, setGist] = useState('')
  const [gistURL, setGistURL] = useState('')
  const [redemptionCode, setRedemptionCode] = useState('')
  const [verified, setVerified] = useState(false)
  const [devParam, setDevParam] = useState('')
  const redemptionCodeToastKey = useRef<Key>()

  useEffect(
    () => () => {
      api?.disconnect()
    },
    [api]
  )

  useEffect(() => {
    if (account) {
      const keyring = new Keyring()
      setGist(
        `This gist is owned by address: ${u8aToHex(
          keyring.decodeAddress(account.address)
        )}`
      )
    } else {
      setGist('')
    }
    setVerified(false)
    setGistURL('')
    setRedemptionCode('')
    setCertificateData(undefined)
  }, [account])

  const getRedemptionCode = async () => {
    if (!certificateData || !contract) return

    if (!redemptionCodeToastKey.current) {
      redemptionCodeToastKey.current = toaster.info(
        'Requesting POAP redemption code...',
        {
          autoHideDuration: 0,
        }
      )
    }

    const {output} = await contract.query.myPoap(certificateData as any, {})
    const code = output?.toString()

    if (code) {
      toaster.clear(redemptionCodeToastKey.current)
      setRedemptionCode(code)
    }
  }

  useInterval(
    () => {
      getRedemptionCode()
    },
    verified && !redemptionCode ? 2000 : null
  )

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

  const onVerify = async () => {
    if (!certificateData || !contract || !account) return
    setVerified(false)
    const {output} = await contract.query.attestGist(
      certificateData as any,
      {},
      gistURL
    )

    const outputJson = output?.toJSON() as any

    if (outputJson.ok) {
      toaster.positive('Gist verified successfully', {})
      const toastKey = toaster.info('Sending redeem transaction...', {
        autoHideDuration: 0,
      })
      try {
        const signer = await getSigner(account)
        await contract.tx
          .redeem({}, outputJson.ok)
          .signAndSend(account.address, {signer}, (status) => {
            if (status.isFinalized) {
              toaster.clear(toastKey)
              toaster.positive('Transaction is finalized', {})
              setVerified(true)
            }
          })
      } catch (err) {
        toaster.clear(toastKey)
        toaster.negative((err as Error).message, {})
      }
    } else {
      toaster.negative(outputJson.err, {})
    }
  }

  return contract ? (
    certificateData ? (
      <>
        <HeadingMedium as="h1">1. Create a Gist</HeadingMedium>
        <ParagraphSmall>
          Create a gist on{' '}
          <StyledLink
            href="https://gist.github.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            GitHub
          </StyledLink>{' '}
          with the following:
        </ParagraphSmall>

        <Block display="flex">
          <Input
            overrides={{
              Root: {
                style: ({$theme}) => ({
                  flex: 1,
                  marginRight: $theme.sizing.scale400,
                }),
              },
            }}
            value={gist}
            disabled={!gist}
          />
          <Button onClick={() => copy(gist)} kind="secondary">
            Copy
          </Button>
        </Block>

        <HeadingMedium marginTop="scale1000" as="h1">
          2. Verify Your Gist
        </HeadingMedium>
        <ParagraphSmall>
          Input your gist <b>raw</b> URL:
        </ParagraphSmall>

        <Block display="flex">
          <Input
            placeholder="https://gist.githubusercontent.com/..."
            overrides={{
              Root: {
                style: ({$theme}) => ({
                  flex: 1,
                  marginRight: $theme.sizing.scale400,
                }),
              },
            }}
            onChange={(e) => setGistURL(e.currentTarget.value)}
          />
          <Button
            disabled={
              !gistURL.startsWith('https://gist.githubusercontent.com/')
            }
            onClick={onVerify}
            kind="secondary"
          >
            Verify
          </Button>
        </Block>

        <HeadingMedium marginTop="scale1000" as="h1">
          3. Get POAP Redemption Code
        </HeadingMedium>
        <ParagraphSmall>
          Your POAP redemption code will appear here when your gist is
          successfully verified
        </ParagraphSmall>

        <Block display="flex">
          <Input
            overrides={{
              Root: {
                style: ({$theme}) => ({
                  flex: 1,
                  marginRight: $theme.sizing.scale400,
                }),
              },
            }}
            value={redemptionCode}
            disabled={!redemptionCode}
          />
          <Button
            disabled={!redemptionCode}
            onClick={() => copy(redemptionCode)}
            kind="secondary"
          >
            Copy
          </Button>
        </Block>

        <StatefulPanel
          title="Dev Options"
          overrides={{
            PanelContainer: {
              style: ({$theme}) => ({marginTop: $theme.sizing.scale1000}),
            },
          }}
        >
          <Textarea
            placeholder='["code1", "code2", "code3"]'
            value={devParam}
            onChange={(e) => setDevParam(e.currentTarget.value)}
          ></Textarea>
          <Button
            overrides={{
              Root: {
                style: ({$theme}) => ({marginTop: $theme.sizing.scale400}),
              },
            }}
            onClick={async () => {
              if (!account || !contract) return
              const signer = await getSigner(account)

              try {
                await contract.tx
                  .adminSetPoapCode({}, JSON.parse(devParam))
                  .signAndSend(account.address, {signer}, (status) => {
                    if (status.isFinalized) {
                      toaster.positive('Transaction is finalized', {})
                    }
                  })
              } catch (err) {
                toaster.negative((err as Error).message, {})
                throw err
              }
            }}
          >
            Admin Set POAP Code
          </Button>
        </StatefulPanel>
      </>
    ) : (
      <Button disabled={!account} onClick={onSignCertificate}>
        Sign Certificate
      </Button>
    )
  ) : (
    <ContractLoader
      name="redeemPOAP"
      onLoad={({api, contract}) => {
        setApi(api)
        setContract(contract)
      }}
    />
  )
}

RedeemPOAP.title = 'Redeem POAP'

export default RedeemPOAP
