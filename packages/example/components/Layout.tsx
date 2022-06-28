import {Block} from 'baseui/block'
import {ChevronLeft} from 'baseui/icon'
import {ToasterContainer} from 'baseui/toast'
import {HeadingLarge} from 'baseui/typography'
import Head from 'next/head'
import {useRouter} from 'next/router'
import {FC} from 'react'
import useIsClient from '../hooks/useIsClient'
import AccountSelect from './AccountSelect'

const Layout: FC<{title?: string}> = ({title, children}) => {
  const {pathname, back} = useRouter()
  const isClient = useIsClient()
  const displayTitle = title || 'Polkadot Decoded 2022 Phala Workshop'

  return (
    <Block width="100%" maxWidth="1000px" margin="0 auto" padding="0 16px 24px">
      <Head>
        <title>{displayTitle}</title>
      </Head>

      <Block
        marginTop="40px"
        marginBottom="40px"
        as="header"
        height="70px"
        display="flex"
        alignItems="center"
      >
        <Block flex="1" display="flex" alignItems="center">
          {pathname !== '/' && (
            <Block onClick={back}>
              <ChevronLeft
                size={36}
                overrides={{
                  Svg: {
                    style: {
                      marginLeft: '-12px',
                      cursor: 'pointer',
                    },
                  },
                }}
              />
            </Block>
          )}
        </Block>
        <HeadingLarge as="div" flex="none">
          {displayTitle}
        </HeadingLarge>
        <Block
          flex="1"
          alignItems="center"
          justifyContent="flex-end"
          display="flex"
        >
          {isClient && pathname !== '/' && <AccountSelect />}
        </Block>
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
