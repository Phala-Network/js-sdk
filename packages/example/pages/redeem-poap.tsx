import {ApiPromise, Keyring} from '@polkadot/api'
import {u8aToHex} from '@polkadot/util'
import {ContractPromise} from '@polkadot/api-contract'
import {useEffect, useState} from 'react'
import {signCertificate, CertificateData} from '@phala/sdk'
import {Button} from 'baseui/button'
import {Block} from 'baseui/block'
import {Input} from 'baseui/input'
import {toaster} from 'baseui/toast'
import {StyledLink} from 'baseui/link'
import {HeadingMedium, ParagraphSmall} from 'baseui/typography'
import {useAtom} from 'jotai'
import accountAtom from '../atoms/account'
import {getSigner} from '../lib/polkadotExtension'
import ContractLoader from '../components/ContractLoader'
import {copy} from '../lib/copy'
import useInterval from '../hooks/useInterval'

const RedeemPOAP: Page = () => {
  const [account] = useAtom(accountAtom)
  const [certificateData, setCertificateData] = useState<CertificateData>()
  const [api, setApi] = useState<ApiPromise>()
  const [contract, setContract] = useState<ContractPromise>()

  const [gist, setGist] = useState('')
  const [gistURL, setGistURL] = useState('')
  const [redemptionCode, setRedemptionCode] = useState('')
  const [verified, setVerified] = useState(false)

  useEffect(() => {
    if (account) {
      const keyring = new Keyring()
      setGist(
        `This gist is owned by: ${u8aToHex(
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

  useInterval(
    () => {
      if (!certificateData || !contract) return
      const toasterKey = toaster.info('Requesting POAP redemption code...', {
        autoHideDuration: 0,
      })
      const getRedemptionCode = async () => {
        const {output, result} = await contract.query.myPoap(
          certificateData as any,
          {}
        )
        if (result.isOk) {
          const code = output?.toString()
          if (typeof code === 'string') {
            toaster.clear(toasterKey)
            setRedemptionCode(code)
          }
        }
      }

      getRedemptionCode()
    },
    verified ? 3000 : null
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
    const {output, result} = await contract.query.attestGist(
      certificateData as any,
      {},
      gistURL
    )

    if (result.isOk) {
      toaster.positive('Gist verified successfully', {})
      const attestGist = output?.toHex()

      if (typeof attestGist === 'string') {
        const signer = await getSigner(account)
        const toasterKey = toaster.info('Sending redeem transaction...', {
          autoHideDuration: 0,
        })
        contract.tx
          .redeem({}, attestGist)
          .signAndSend(account.address, {signer}, (status) => {
            if (status.isFinalized) {
              toaster.clear(toasterKey)
              toaster.positive('Transaction is finalized', {})
              setVerified(true)
            }
          })
      }
    } else {
      toaster.negative('Gist verification failed', {})
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
        <ParagraphSmall>Input your gist URL:</ParagraphSmall>

        <Block display="flex">
          <Input
            placeholder="https://gist.github.com/..."
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
            disabled={!gistURL.startsWith('https://gist.github.com/')}
            onClick={onVerify}
            kind="secondary"
          >
            Verify
          </Button>
        </Block>

        <HeadingMedium marginTop="scale1000" as="h1">
          3. Get POAP Redeem Code
        </HeadingMedium>
        <ParagraphSmall>
          Your POAP redeem code will appear here when your gist is successfully
          verified
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
      </>
    ) : (
      <Button disabled={!account} onClick={onSignCertificate}>
        Sign Certificate
      </Button>
    )
  ) : (
    <ContractLoader
      contractKey="redeemPOAP"
      onLoad={({api, contract}) => {
        setApi(api)
        setContract(contract)
      }}
    />
  )
}

RedeemPOAP.title = 'Redeem POAP'

export default RedeemPOAP
