import {Block} from 'baseui/block'
import {ChevronLeft} from 'baseui/icon'
import {ToasterContainer} from 'baseui/toast'
import {HeadingLarge} from 'baseui/typography'
import Head from 'next/head'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {FC} from 'react'
import useIsClient from '../hooks/useIsClient'
import AccountSelect from './AccountSelect'

const Layout: FC<{title?: string}> = ({title, children}) => {
  const {pathname} = useRouter()
  const isClient = useIsClient()
  const displayTitle = title || 'Polkadot Decoded 2022 Phala Workshop'

  return (
    <Block width="100%" maxWidth="1000px" margin="0 auto" padding="0 16px 24px">
      <Head>
        <title>{displayTitle}</title>
      </Head>

      <Block
        as="header"
        height="120px"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Block display="flex" alignItems="center">
          {pathname !== '/' && (
            <Link href="/">
              <ChevronLeft
                size={36}
                overrides={{
                  Svg: {
                    style: {
                      marginLeft: '-12px',
                    },
                  },
                }}
              />
            </Link>
          )}
          <HeadingLarge as="div">{displayTitle}</HeadingLarge>
        </Block>
        {isClient && <AccountSelect></AccountSelect>}
      </Block>

      <main>{children}</main>

      <ToasterContainer
        placement="topRight"
        autoHideDuration={3000}
        overrides={{ToastBody: {style: {wordBreak: 'break-all'}}}}
      />
    </Block>
  )
}

export default Layout
