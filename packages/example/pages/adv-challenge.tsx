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

const AdvChallenge: Page = () => {
  // Basic states for contract interaction
  const [account] = useAtom(accountAtom)
  const [certificateData, setCertificateData] = useState<CertificateData>()
  const [api, setApi] = useState<ApiPromise>()
  const [contract, setContract] = useState<ContractPromise>()

  // UI-related states
  const [attestContract, setAttestContract] = useState('')
  const [attestArg, setAttestArg] = useState('')
  const [verified, setVerified] = useState(false)

  useEffect(
    () => () => {
      api?.disconnect()
    },
    [api]
  )

  // Reset the UI when the selected account is changed
  useEffect(() => {
    setVerified(false)
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
    const {output} = await contract.query.checkContract(
      certificateData as any,
      {},
      attestContract,
      attestArg,
    );

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
        <HeadingMedium as="h1">1. Deploy Your Solution</HeadingMedium>
        <ParagraphSmall>
          Deploy a fat contract on{' '}
          <StyledLink
            href="https://phat.github.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Fat Contract
          </StyledLink>.
        </ParagraphSmall>

        <HeadingMedium marginTop="scale1000" as="h1">
          2. Verify Your Solution
        </HeadingMedium>
        <ParagraphSmall>
          Input your contract address:
        </ParagraphSmall>

        <Block display="flex">
          <Input
            placeholder='0x...'
            overrides={{
              Root: {
                style: ({$theme}) => ({
                  flex: 1,
                  marginRight: $theme.sizing.scale400,
                }),
              },
            }}
            onChange={(e) => setAttestContract(e.currentTarget.value)}
          />
          <Input
            placeholder='https://...'
            overrides={{
              Root: {
                style: ({$theme}) => ({
                  flex: 1,
                  marginRight: $theme.sizing.scale400,
                }),
              },
            }}
            onChange={(e) => setAttestArg(e.currentTarget.value)}
          />
          <Button
            disabled={
              false // TODO
            }
            onClick={onVerify}
            kind="secondary"
          >
            Verify
          </Button>
        </Block>

        <HeadingMedium marginTop="scale1000" as="h1">
          3. Get Your Advanced Challenge POAP
        </HeadingMedium>
        <ParagraphSmall>
          Your POAP redemption code can be found in the FatBadges contract page if the verification
          is passed.
        </ParagraphSmall>
      </>
    ) : (
      <Button disabled={!account} onClick={onSignCertificate}>
        Sign Certificate
      </Button>
    )
  ) : (
    <ContractLoader
      name="advChallenge"
      onLoad={({api, contract}) => {
        setApi(api)
        setContract(contract)
      }}
    />
  )
}

AdvChallenge.title = 'Advanced Challenge'

export default AdvChallenge
