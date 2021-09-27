// FIXME: declare crypto-browserify as crypto is a bad decision
declare module 'crypto-browserify' {
  import crypto from 'crypto'
  export default crypto
}
