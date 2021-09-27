import type {NextPage} from 'next'
import Head from 'next/head'
import {H1} from 'baseui/typography'
import {useRouter} from 'next/router'
import Link from 'next/link'
import {StyledLink} from 'baseui/link'

const LINKS: [string, string][] = [['/guess-number', 'Guess Number']]

const Home: NextPage = () => {
  const router = useRouter()
  return (
    <div>
      <Head>
        <title>Phala SDK Example</title>
      </Head>

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
