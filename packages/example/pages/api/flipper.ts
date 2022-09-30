import {create, signCertificate} from '@phala/sdk'
import {Keyring} from '@polkadot/api'
import {ContractPromise} from '@polkadot/api-contract'
import {NextApiHandler} from 'next'
import metadata from '../../lib/flipperMetadata.json'
import {createApi} from '../../lib/polkadotApi'

const endpoint = 'ws://localhost:19944'
const baseURL = 'http://localhost:8000'
const contractId =
  '0x0cd0a63ff934fb7a0ca0d4ff84b94fda97d9c5007c07b74147337f1d144c8e4f'

const flipper: NextApiHandler = async (req, res) => {
  const api = await createApi(endpoint)
  const contract = new ContractPromise(
    (await create({api, baseURL, contractId})).api,
    metadata,
    contractId
  )
  const keyring = new Keyring({type: 'sr25519'})
  const alice = keyring.addFromUri('//Alice')

  if (req.method === 'GET') {
    const certificateData = await signCertificate({
      api,
      pair: alice,
    })

    const {output} = await contract.query.get(certificateData as any, {})
    await api.disconnect()
    return res.status(200).json(output?.toJSON())
  }

  if (req.method === 'POST') {
    const hash = await contract.tx.flip({}).signAndSend(alice)
    await api.disconnect()
    return res.status(200).json(hash)
  }
}

export default flipper
