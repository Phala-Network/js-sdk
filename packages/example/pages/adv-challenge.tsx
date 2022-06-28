import {CertificateData, signCertificate} from '@phala/sdk'
import {ApiPromise} from '@polkadot/api'
import {ContractPromise} from '@polkadot/api-contract'
import {Block} from 'baseui/block'
import {Button} from 'baseui/button'
import {Input} from 'baseui/input'
import {StyledLink} from 'baseui/link'
import {Spinner} from 'baseui/spinner'
import {toaster} from 'baseui/toast'
import {HeadingMedium, ParagraphSmall} from 'baseui/typography'
import {useAtom} from 'jotai'
import {loadContract} from 'lib/contract'
import Link from 'next/link'
import {useEffect, useState} from 'react'
import advanced_judger_metadata from '../assets/advanced_judger.metadata.json'
import accountAtom from '../atoms/account'
import {getSigner} from '../lib/polkadotExtension'

const AdvChallenge: Page = () => {
  // Basic states for contract interaction
  const [account] = useAtom(accountAtom)
  const [certificateData, setCertificateData] = useState<CertificateData>()
  const [api, setApi] = useState<ApiPromise>()
  const [contract, setContract] = useState<ContractPromise>()

  // UI-related states
  const [attestContract, setAttestContract] = useState('')
  const [attestArg, setAttestArg] = useState('')

  useEffect(
    () => () => {
      api?.disconnect()
    },
    [api]
  )

  useEffect(() => {
    loadContract(
      '0xa61b812aaee4200ae0f51bdcef16709635f33c149cde957a8e70784c503976a1',
      advanced_judger_metadata
    ).then((res) => {
      setApi(res.api)
      setContract(res.contract)
    })
  }, [])

  // Reset the UI when the selected account is changed
  useEffect(() => {
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

    // Send a query to check the contract submission.
    const {output} = await contract.query.checkContract(
      certificateData as any,
      {},
      attestContract,
      attestArg
    )

    // outputJson is a `Result<Attestation>`
    const outputJson = output?.toJSON() as any

    if (outputJson.ok) {
      toaster.positive('Submission verified successfully', {})
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

  if (!contract) {
    return <Spinner />
  }

  return certificateData ? (
    <>
      <HeadingMedium as="h1">1. Deploy Your Solution</HeadingMedium>
      <ParagraphSmall>
        Deploy a fat contract on{' '}
        <StyledLink
          href="https://phat.phala.network/"
          target="_blank"
          rel="noreferrer noopener"
        >
          Fat Contract UI
        </StyledLink>
        .
      </ParagraphSmall>

      <HeadingMedium marginTop="scale1000" as="h1">
        2. Verify Your Solution
      </HeadingMedium>
      <ParagraphSmall>
        Input your contract address and the invoke arg:
      </ParagraphSmall>

      <Block display="flex">
        <Input
          placeholder="0x..."
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
          placeholder="https://..."
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
        3. Get POAP Redemption Code
      </HeadingMedium>
      <ParagraphSmall>
        Your POAP redemption code can be found in the{' '}
        <Link href="/fat-badges" passHref>
          <StyledLink>FatBadges</StyledLink>
        </Link>{' '}
        contract page if the verification is passed.
      </ParagraphSmall>
    </>
  ) : (
    <Button disabled={!account} onClick={onSignCertificate}>
      Sign Certificate
    </Button>
  )
}

AdvChallenge.title = 'Advanced Challenge'

export default AdvChallenge
