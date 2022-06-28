import { CertificateData, signCertificate } from '@phala/sdk'
import { ApiPromise, Keyring } from '@polkadot/api'
import { ContractPromise } from '@polkadot/api-contract'
import { u8aToHex } from '@polkadot/util'
import { StatefulPanel } from 'baseui/accordion'
import { Block } from 'baseui/block'
import { Button } from 'baseui/button'
import { Input } from 'baseui/input'
import { StyledLink } from 'baseui/link'
import { Textarea } from 'baseui/textarea'
import { toaster } from 'baseui/toast'
import { HeadingMedium, ParagraphSmall } from 'baseui/typography'
import { useAtom } from 'jotai'
import { Key, useEffect, useRef, useState } from 'react'
import accountAtom from '../atoms/account'
import ContractLoader from '../components/ContractLoader'
import useInterval from '../hooks/useInterval'
import { copy } from '../lib/copy'
import { getSigner } from '../lib/polkadotExtension'

const EasyChallenge: Page = () => {
  // Basic states for contract interaction
  const [account] = useAtom(accountAtom)
  const [certificateData, setCertificateData] = useState<CertificateData>()
  const [api, setApi] = useState<ApiPromise>()
  const [contract, setContract] = useState<ContractPromise>()

  // UI-related states
  const [gist, setGist] = useState('')
  const [gistURL, setGistURL] = useState('')
  const [redemptionCode, setRedemptionCode] = useState('')
  const [verified, setVerified] = useState(false)
  const redemptionCodeToastKey = useRef<Key>()

  useEffect(
    () => () => {
      api?.disconnect()
    },
    [api]
  )

  // Reset the UI when the selected account is changed
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

  // Logic of the Verify button
  const onVerify = async () => {
    if (!certificateData || !contract || !account) return
    setVerified(false)

    // Send a query to attest the gist from the given url.
    const {output} = await contract.query['submittableOracle::attest'](
      certificateData as any,
      {},
      gistURL
    )

    // outputJson is a `Result<Attestation>`
    const outputJson = output?.toJSON() as any

    if (outputJson.ok) {
      toaster.positive('Gist verified successfully', {})
      // We have received the attestation from the worker. Now send a command to redeem the POAP
      // with the attestation.
      const toastKey = toaster.info('Sending redeem transaction...', {
        autoHideDuration: 0,
      })
      try {
        // Send the command
        const signer = await getSigner(account)
        await contract.tx
          .redeem({}, outputJson.ok)
          .signAndSend(account.address, {signer}, (status) => {
            if (status.isFinalized) {
              toaster.clear(toastKey)
              toaster.positive('Transaction is finalized', {})
              // After the transaction is included in a finalized block, we start to poll the Fat
              // Contract to see if we can get the redemption code. This will start the 2s timer.
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
          Your POAP redemption code can be found in the FatBadges contract page if the verification
          is passed.
        </ParagraphSmall>

        {/* <Block display="flex">
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
        </Block> */}
      </>
    ) : (
      <Button disabled={!account} onClick={onSignCertificate}>
        Sign Certificate
      </Button>
    )
  ) : (
    <ContractLoader
      name="easyChallenge"
      onLoad={({api, contract}) => {
        setApi(api)
        setContract(contract)
      }}
    />
  )
}

EasyChallenge.title = 'Easy Challenge'

export default EasyChallenge
