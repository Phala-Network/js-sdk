import {NextPage} from 'next'

declare global {
  type Page = NextPage & {title?: string}
}
