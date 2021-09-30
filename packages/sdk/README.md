# @phala/sdk

> ⚠️ This package is under developing, and some features might change in the future.

## Install

```sh
npm install @phala/sdk
# or
yarn add @phala/sdk
```

## Usage

[Create a polkadot js instance](https://polkadot.js.org/docs/api/start/create) with necessary types:

```javascript
// Import
import {ApiPromise, WsProvider} from '@polkadot/api'
import {create, types} from '@phala/sdk'

const wsProvider = new WsProvider('ws://0.0.0.0:9944')
const api = await ApiPromise.create({
  provider: wsProvider,
  types: {
    // Add phala sdk types
    ...types,

    // Add your types
    TemplateRequestData: {_enum: {Foo: null}},
    TemplateResponseData: {
      _enum: {Bar: null},
    },
    TemplateRequest: {
      head: 'ContractQueryHead',
      data: 'TemplateRequestData',
    },
    TemplateResponse: {
      nonce: '[u8; 32]',
      result: 'Result<TemplateResponseData>',
    },
    TemplateCommand: {_enum: {Foo: null}},
  },
})

const phala = await create({api, baseURL: 'http://0.0.0.0:8000'})
```

[Get signer from polkadot.js extension](https://polkadot.js.org/docs/extension/usage), then sign a certificate:

```javascript
// Import
import {signCertificate} from '@phala/sdk'

const certificateData = await setCertificateData(
  await signCertificate({
    api,
    address: account.address,
    signer,
  })
)
```

Send a query request with certificate:

```javascript
// Import
import {numberToHex, hexAddPrefix} from '@polkadot/util'
// You can use anyway you like to generate nonce
import {randomHex} from '@phala/sdk'

const encodedQuery = api
  .createType('TemplateRequest', {
    head: {
      id: numberToHex(contractId, 256),
      nonce: hexAddPrefix(randomHex(32)),
    },
    data: {foo: null},
  })
  .toHex()

// Send query request with saved certificate data
phala.query(encodedQuery, certificateData).then((data) => {
  // Decode response
  const {
    result: {ok: result},
  } = api.createType('TemplateResponse', hexAddPrefix(data)).toJSON()
})
```

Send a command:

```javascript
phala.command({
  account,
  contractId,
  // Create your payload
  payload: api.createType('TemplateCommand', {Foo: null}).toHex(),
  signer,
  onStatus: (status) => {
    if (status.isFinalized) {
      // Command success
    }
  },
})
```

See more details in [example](../example)

## TODO

1. Cjs export and node.js support
2. More configurable options such as certificate ttl
