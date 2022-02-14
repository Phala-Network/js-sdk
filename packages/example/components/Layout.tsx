import {FC} from 'react'
import Head from 'next/head'
import {useRouter} from 'next/router'
import {HeadingXLarge} from 'baseui/typography'
import {ToasterContainer} from 'baseui/toast'
import {Block} from 'baseui/block'
import {ChevronLeft} from 'baseui/icon'
import AccountSelect from './AccountSelect'
import Link from 'next/link'
import useIsClient from '../hooks/useIsClient'

const Layout: FC<{title?: string}> = ({title, children}) => {
  const {pathname} = useRouter()
  const isClient = useIsClient()
  const displayTitle = title || 'Phala SDK Example'

  return (
    <Block width="100%" maxWidth="700px" margin="0 auto" padding="0 10px">
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
          <HeadingXLarge as="div">{displayTitle}</HeadingXLarge>
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
