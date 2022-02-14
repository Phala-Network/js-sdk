import type {NextPage} from 'next'
import Head from 'next/head'
import Link from 'next/link'
import {ListItem, ListItemLabel} from 'baseui/list'

const LINKS: [string, string][] = [
  ['/flipper', 'Flipper'],
  ['/get-ip', 'Get IP'],
  ['/redeem-poap', 'Redeem POAP'],
]

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Phala SDK Example</title>
      </Head>

      <ol>
        {LINKS.map(([href, label], index) => (
          <ListItem key={label} artwork={() => index + 1}>
            <ListItemLabel>
              <Link href={href}>{label}</Link>
            </ListItemLabel>
          </ListItem>
        ))}
      </ol>
    </div>
  )
}

export default Home
