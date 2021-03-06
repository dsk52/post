import React, { ReactNode } from 'react'
import Link from 'next/link'
import { routes } from '../routes'
import { MetaHead } from '../components/MetaHead'

type Props = {
  children?: ReactNode
  title?: string
  description?: string
  pagePath?: string
}

const Layout: React.FC<Props> = ({
  children,
  title = 'default title',
  description = '',
  pagePath = '',
}: Props) => (
  <div>
    <MetaHead title={title} description={description} pagePath={pagePath} />
    <header>
      <nav>
        <Link href={routes.top}>
          <a>Home</a>
        </Link>{' '}
        |{' '}
        <Link href={routes.post}>
          <a>Posts</a>
        </Link>{' '}
      </nav>
    </header>
    {children}
    <footer>
      <hr />
      <span>I&apos;m here to stay (Footer)</span>
    </footer>
  </div>
)

export default Layout
