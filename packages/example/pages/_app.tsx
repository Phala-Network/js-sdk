import {BaseProvider, LightTheme} from 'baseui'
import {SnackbarProvider} from 'baseui/snackbar'
import type {AppProps} from 'next/app'
import {Provider as StyletronProvider} from 'styletron-react'
import Layout from '../components/Layout'
import '../styles/globals.css'
import {styletron} from '../styletron'

function MyApp({Component, pageProps}: AppProps & {Component: Page}) {
  return (
    <StyletronProvider value={styletron}>
      <BaseProvider theme={LightTheme}>
        <SnackbarProvider>
          <Layout title={Component.title}>
            <Component {...pageProps} />
          </Layout>
        </SnackbarProvider>
      </BaseProvider>
    </StyletronProvider>
  )
}
export default MyApp
