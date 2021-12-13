import {NextPage} from 'next'

declare global {
  type Page = NextPage & {title?: string}

  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_BASE_URL: string
      NEXT_PUBLIC_WS_ENDPOINT: string
    }
  }
}
