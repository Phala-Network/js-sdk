import {StyledLink} from 'baseui/link'
import {ListItem, ListItemLabel} from 'baseui/list'
import type {NextPage} from 'next'
import Head from 'next/head'
import Link from 'next/link'

const LINKS: [string, string][] = [
  ['/fat-badges', 'Decoded 2022 - Your Badges'],
  ['/easy-challenge', 'Decoded 2022 - Easy Challenge'],
  ['/adv-challenge', 'Decoded 2022 - Advanced Challenge'],
]

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Polkadot Decoded 2022 Phala Workshop</title>
      </Head>

      <ol>
        {LINKS.map(([href, label], index) => (
          <ListItem key={label} artwork={() => index + 1}>
            <ListItemLabel>
              <Link href={href} passHref>
                <StyledLink>{label}</StyledLink>
              </Link>
            </ListItemLabel>
          </ListItem>
        ))}
      </ol>
    </div>
  )
}

export default Home
