import {toaster} from 'baseui/toast'

export const copy = async (text: string) => {
  await navigator.clipboard.writeText(text)

  toaster.positive('Copied to Clipboard', {})
}
