import {CertificateData, signCertificate} from '@phala/sdk'
import type {ApiPromise} from '@polkadot/api'
import {ContractPromise} from '@polkadot/api-contract'
import type {Result, Text} from '@polkadot/types-codec'
import type {Codec} from '@polkadot/types/types'
import {BN} from '@polkadot/util'
import {Block} from 'baseui/block'
import {Button} from 'baseui/button'
import {ButtonGroup} from 'baseui/button-group'
import {Spinner} from 'baseui/spinner'
import {toaster} from 'baseui/toast'
import {useAtom} from 'jotai'
import {loadContract} from 'lib/contract'
import {useEffect, useState} from 'react'
import fat_badges_metadata from '../assets/fat_badges.metadata.json'
import accountAtom from '../atoms/account'
import {getSigner} from '../lib/polkadotExtension'

interface BadgeInfo extends Codec {
  id: number
  name: string
  numCode: number
  numIssued: number
}
interface MyBadgeInfo {
  info: BadgeInfo
  code?: string
}
type BadgeInfoReulst = Result<BadgeInfo, any>

const Flipper: Page = () => {
  const [account] = useAtom(accountAtom)
  const [certificateData, setCertificateData] = useState<CertificateData>()
  const [api, setApi] = useState<ApiPromise>()
  const [contract, setContract] = useState<ContractPromise>()

  const [badges, setBadges] = useState<MyBadgeInfo[]>([])

  useEffect(
    () => () => {
      api?.disconnect()
    },
    [api]
  )

  useEffect(() => {
    setCertificateData(undefined)
  }, [account])

  useEffect(() => {
    loadContract(
      '0x083872054018c5b1890b8a901fc4213a385e3e4df5ddcc71405e4000e4244c6c',
      fat_badges_metadata
    ).then((res) => {
      setApi(res.api)
      setContract(res.contract)
    })
  }, [])

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

  const readPoapCode = async (): Promise<MyBadgeInfo[]> => {
    if (!certificateData || !contract) return []
    const totalBadges = await contract.query.getTotalBadges(
      certificateData as any,
      {}
    )
    if (!totalBadges?.output) {
      return []
    }
    const numTotalBadges: number = (
      totalBadges.output as unknown as BN
    ).toNumber()
    const badges = []
    for (let i = 0; i < numTotalBadges; i++) {
      const badgeInfo = await contract.query.getBadgeInfo(
        certificateData as any,
        {},
        i
      )
      const code = await contract.query.get(certificateData as any, {}, i)
      const codeOutput = code?.output as Result<Text, any>
      badges.push({
        info: (badgeInfo?.output as BadgeInfoReulst).asOk.toJSON() as unknown as BadgeInfo,
        code: codeOutput.isOk ? codeOutput.asOk.toString() : undefined,
      })
    }
    return badges
  }

  const loadDisplayPoapCode = async () => {
    setBadges(await readPoapCode())
  }

  if (!contract) {
    return <Spinner />
  }

  return (
    <>
      <ButtonGroup>
        <Button disabled={!account} onClick={onSignCertificate}>
          Sign Certificate
        </Button>
        <Button disabled={!certificateData} onClick={loadDisplayPoapCode}>
          Load
        </Button>
      </ButtonGroup>
      <Block>
        {badges.map((myBadge, idx) => (
          <p key={idx}>
            Badge {myBadge.info.id}: {myBadge.info.name} (
            {myBadge.info.numIssued} / {myBadge.info.numCode}).
            {myBadge.code && `My code is: ${myBadge.code}`}
          </p>
        ))}
      </Block>
    </>
  )
}

Flipper.title = 'Fat Contract Badges'

export default Flipper
