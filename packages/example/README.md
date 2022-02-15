# Phala JS SDK Scaffold

## Getting Started

```bash
yarn
yarn dev
```

**Important**: You must build `@phala/sdk` before this project (`cd ../sdk; yarn build (dev)`). Or you can build the two packages together under the monorepo root directory (`yarn build (dev)`).

Open [http://localhost:3000](http://localhost:3000).

## Examples

- [Flipper](./pages/flipper.tsx): The UI of the unmodified "flipper" ink! contract.
- [Get IP](./pages/get-ip.tsx): The UI of Fat Contract "get-ip".
- [Redeem POAP](./pages/redeem-poap.tsx): The UI of the [ETHDenver workshop](https://github.com/Phala-Network/fat-contract-workshop/tree/http) sample contract. It covers more advanced command and query operations.

## Development

To create a new page, it's suggested to copy an existing page (e.g. Redeem POAP), and modify "pages/index.tsx" to add a link.

A page should contain at least a _Contract Object_ to interact with the contract. You can easily create it from `<ContractLoader>`.

To send a _command_, get the signer from the framework by the selected account, and then send the transaction with the contract object.

```js
const [account] = useAtom(accountAtom)
const signer = await getSigner(account)
await contract.tx.methodName({}, arg0, arg1, ...)
    .signAndSend(account.address, {signer})
```

To send a _query_, a _certificate_ is required. 

```js 
const certificate = await signCertificate({
    api,
    account,
    signer,
})
// ....
const outcome = await contract.query.methodName(certificateData, {}, arg0, arg1, ...)
```

Please refer to the [Phala SDK Readme](../sdk/README.md) for a detailed explanation of the following concepts:

- contract object
- command & query
- certificate
- and more...
