import Link from 'next/link'
import { routes } from '../routes'

export const Header: React.FC = () => (
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
)
