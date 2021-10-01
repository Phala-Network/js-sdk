import type {NextPage} from 'next'
import Head from 'next/head'
import Link from 'next/link'
import {StyledLink} from 'baseui/link'

const LINKS: [string, string][] = [
  ['/guess-number', 'Guess Number'],
  ['/btc-price-bot', 'BTC Price Bot'],
]

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Phala SDK Example</title>
      </Head>

      <Link href="/template" passHref>
        <StyledLink>Template</StyledLink>
      </Link>

      <ol>
        {LINKS.map(([href, label], index) => (
          <li key={href}>
            <Link href={href} passHref>
              <StyledLink>{label}</StyledLink>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default Home
