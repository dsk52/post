import Link from 'next/link'
import Layout from '../components/Layout'

const IndexPage: React.FC = () => (
  <Layout title="Home | post">
    <h1>Hello Next.js</h1>
    <p>
      <Link href="/posts/list">
        <a>List</a>
      </Link>
    </p>
  </Layout>
)

export default IndexPage
