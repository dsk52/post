import * as React from 'react'
import { MetaHead } from '../components/MetaHead'
import { Header } from './Header'
import { Footer } from './Footer'

type Props = {
  children?: React.ReactNode
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
    <Header />
    {children}
    <Footer />
  </div>
)

export default Layout
