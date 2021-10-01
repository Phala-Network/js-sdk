import type {FC} from 'react'
import Head from 'next/head'
import {H2} from 'baseui/typography'
import useIsClient from 'hooks/useIsClient'
import {ToasterContainer} from 'baseui/toast'
import {Block} from 'baseui/block'
import AccountSelect from './AccountSelect'

const Layout: FC<{title?: string}> = ({title, children}) => {
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
        <H2>{displayTitle}</H2>
        {isClient && <AccountSelect></AccountSelect>}
      </Block>

      <main>{children}</main>

      <ToasterContainer
        placement="top"
        autoHideDuration={3000}
        overrides={{ToastBody: {style: {wordBreak: 'break-all'}}}}
      />
    </Block>
  )
}

export default Layout
