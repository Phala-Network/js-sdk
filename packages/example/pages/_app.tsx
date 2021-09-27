import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {Provider as StyletronProvider} from 'styletron-react'
import {LightTheme, BaseProvider} from 'baseui'
import Layout from 'components/Layout'
import {styletron} from '../styletron'

function MyApp({Component, pageProps}: AppProps & {Component: Page}) {
  return (
    <StyletronProvider value={styletron}>
      <BaseProvider theme={LightTheme}>
        <Layout title={Component.title}>
          <Component {...pageProps} />
        </Layout>
      </BaseProvider>
    </StyletronProvider>
  )
}
export default MyApp
