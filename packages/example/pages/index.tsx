import {useStyletron} from 'baseui'
import {Block} from 'baseui/block'
import {StyledLink} from 'baseui/link'
import {HeadingMedium} from 'baseui/typography'
import type {NextPage} from 'next'
import Head from 'next/head'
import Link from 'next/link'
import badge0 from '../assets/badge-0.png'
import badge1 from '../assets/badge-1.png'

const Entry = ({
  href,
  label,
  src,
}: {
  href: string
  label: string
  src: string
}) => {
  const [css] = useStyletron()
  return (
    <Link href={href}>
      <Block
        display="flex"
        flexDirection="column"
        alignItems="center"
        margin="0 20px"
        overrides={{
          Block: {
            style: {
              cursor: 'pointer',
            },
          },
        }}
      >
        <img
          src={src}
          className={css({width: '240px', height: '240px', display: 'block'})}
          alt=""
        />
        <HeadingMedium>{label}</HeadingMedium>
      </Block>
    </Link>
  )
}

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Polkadot Decoded 2022 Phala Workshop</title>
      </Head>
      <Block
        display="flex"
        justifyContent="space-around"
        flexWrap
        marginTop="100px"
      >
        <Entry href="/easy-challenge" label="Easy Challenge" src={badge0.src} />
        <Entry
          href="/adv-challenge"
          label="Advanced Challenge"
          src={badge1.src}
        />
      </Block>

      <Block justifyContent="center" display="flex" marginTop="160px">
        Already finished?
        <Link href="/fat-badges" passHref>
          <StyledLink $style={{marginLeft: '10px'}}>
            Get your redemption code in FatBadges
          </StyledLink>
        </Link>
      </Block>
    </div>
  )
}

export default Home
