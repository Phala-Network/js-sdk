import crypto from 'crypto-browserify'

export const randomHex = (size = 12): string =>
  crypto.randomBytes(size).toString('hex')
