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
    account,
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

## Tutorial

In this part, we will take a guessing number app as an example. This app will contain two main functions, guessing the number and resetting the number.

Now let's create it step by step.

### Setup

Start a project in a way you are familiar with such as using [create-react-app](https://create-react-app.dev/).

Install `@phala/sdk`, `@polkadot/api`, `@polkadot/util` and `@polkadot/extension-dapp` in your project:

```sh
npm install @phala/sdk @polkadot/api @polkadot/util @polkadot/extension-dapp
# or
yarn add @phala/sdk @polkadot/api @polkadot/util @polkadot/extension-dapp
```

### Before Coding

Since we use [SCALE Codec](https://substrate.dev/docs/en/knowledgebase/advanced/codec) to interact with the backend, we have to predefine some types. In this example you need to know these types:

- `u32`: 32-bit integer type.
- `_enum`: enum, a type that can be any one of several variants.
- `[u8; 32]`: like `new Uint8Array(32)` in javascript.
- `Result<T, E>`: an enum that represents either success (Ok) or failure (Err).

### Create an Instance

First, [create a polkadot js instance](https://polkadot.js.org/docs/api/start/create):

> For convenience, the subsequent code snippets assume top-level `await` is available.

```javascript
import {ApiPromise, WsProvider} from '@polkadot/api'
import {types as phalaSDKTypes} from '@phala/sdk'

const api = await ApiPromise.create({
  provider: new WsProvider('ws://your-node-endpoint'),
  types: {
    // Add types sdk required
    ...phalaSDKTypes,

    // Your types here
    RandomNumber: 'u32', // The number to be guessed
    Guess: {guess_number: 'RandomNumber'},
    GuessNumberRequestData: {
      _enum: {Guess: 'Guess'},
    },
    // Request structure
    GuessNumberRequest: {
      head: 'ContractQueryHead',
      data: 'GuessNumberRequestData',
    },
    GuessResult: {
      _enum: ['TooLarge', 'ToSmall', 'Correct'],
    },
    // Response structure
    GuessNumberResponse: {
      nonce: '[u8; 32]',
      result: 'Result<GuessNumberResponseData>',
    },
  },
})
```

Pass through it to `createPhala`:

```javascript
import {
  types as phalaSDKTypes,
  create as createPhala, // import create function
} from '@phala/sdk'

const phala = await createPhala({api, baseURL: 'http://your-backend-url'})
```

### Sign a Certificate

You may notice that we have no authentication information yet. Usually it comes from the signature provided by the polkadot-js plugin, which means we have to manually sign every query. So we can pre-sign a certificate and sign queries through it:

```javascript
import {
  types as phalaSDKTypes,
  create as createPhala,
  signCertificate, // import signCertificate function
} from '@phala/sdk'
import {
  web3Enable,
  web3Accounts,
  web3FromSource,
} from '@polkadot/extension-dapp'

await web3Enable('guess number app')
const allAccounts = await web3Accounts()
const account = allAccounts[0]
const injector = await web3FromSource(account.meta.source)
const signer = injector.signer

const certificateData = await signCertificate({
  api,
  account,
  signer,
})
```

There is more information in [how to use polkadot-js extension to sign a message](https://polkadot.js.org/docs/extension/cookbook#sign-a-message).

### Send a Query Request

Finally, we can send our first query request. Add an input box or any other elements to page to get a input value:

```javascript
import {
  types as phalaSDKTypes,
  create as createPhala,
  signCertificate,
  randomHex, // a util function for generating nonce
} from '@phala/sdk'
import {numberToHex, hexAddPrefix, u8aToHex} from '@polkadot/util'

// Encode request body
const encodedQuery = api
  .createType('GuessNumberRequest', {
    head: {
      id: numberToHex('your-contract-id-in-number', 256),
      nonce: hexAddPrefix(randomHex(32)),
    },
    data: {
      guess: {
        guess_number: parseInt(number), // The value got from user
      },
    },
  })
  .toHex()

// Send with certificateData signed above
const data = await phala.query(encodedQuery, certificateData)

// Decode response data
const {
  result: {
    ok: {guessResult},
  },
} = api.createType('GuessNumberResponse', hexAddPrefix(data)).toJSON()

alert(guessResult)
```

### Send a Command Request

The query request can just read from backend. When you want to write or change some data like resetting number, you should send a command request.

The command request is actually [transaction](https://polkadot.js.org/docs/api/start/api.tx/), let's add a command to reset the number:

```javascript
const api = await ApiPromise.create({
  // ...
  types: {
    // ...
    // Add a new type for command
    GuessNumberCommand: {
      _enum: {NextRandom: null},
    },
  },
})

await phala.command({
  account,
  contractId: 'your-contract-id-in-number',
  payload: api.createType('GuessNumberCommand', {NextRandom: null}).toHex(),
  signer, // The transaction cannot be signed with certificate
  onStatus: (status) => {
    if (status.isFinalized) {
      // Command success
    }
  },
})
```

Please note that since the command is a transaction, it will **NOT** have a response body like a normal http post request, and the command success does **NOT** mean the request is handled properly.

### Have Fun

We have finished the key logic in our app, feel free to add more futures.

The full functional example is [here](../example/pages/guess-number.tsx).

## TODO

1. Cjs export and node.js support.
2. More configurable options such as certificate ttl.
