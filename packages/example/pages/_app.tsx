import {BaseProvider, LightTheme} from 'baseui'
import type {AppProps} from 'next/app'
import {Provider as StyletronProvider} from 'styletron-react'
import Layout from '../components/Layout'
import '../styles/globals.css'
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
