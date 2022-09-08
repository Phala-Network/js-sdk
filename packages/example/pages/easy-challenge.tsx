import {CertificateData, signCertificate} from '@phala/sdk'
import {ApiPromise, Keyring} from '@polkadot/api'
import {ContractPromise} from '@polkadot/api-contract'
import {u8aToHex} from '@polkadot/util'
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
import easy_oracle_metadata from '../assets/easy_oracle.metadata.json'
import accountAtom from '../atoms/account'
import {copy} from '../lib/copy'
import {getSigner} from '../lib/polkadotExtension'

const EasyChallenge: Page = () => {
  // Basic states for contract interaction
  const [account] = useAtom(accountAtom)
  const [certificateData, setCertificateData] = useState<CertificateData>()
  const [api, setApi] = useState<ApiPromise>()
  const [contract, setContract] = useState<ContractPromise>()

  // UI-related states
  const [gist, setGist] = useState('')
  const [gistURL, setGistURL] = useState('')

  useEffect(
    () => () => {
      api?.disconnect()
    },
    [api]
  )

  useEffect(() => {
    loadContract(
      '0x80b980b7a330da4cf56ab8863b0f28e052222f8ad843bb920f687bbd87969607',
      easy_oracle_metadata
    ).then((res) => {
      setApi(res.api)
      setContract(res.contract)
    })
  }, [])

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
    setGistURL('')
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
          disabled={!gistURL.startsWith('https://gist.githubusercontent.com/')}
          onClick={onVerify}
          kind="secondary"
        >
          Verify
        </Button>
      </Block>

      <HeadingMedium marginTop="scale1000" as="h1">
        3. Get Your Easy Challenge POAP
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

EasyChallenge.title = 'Easy Challenge'

export default EasyChallenge
