// FIXME: declare crypto-browserify as crypto is a bad decision
declare module 'crypto-browserify' {
  export * from 'crypto'
}
