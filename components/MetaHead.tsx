import Head from 'next/head'

type Props = {
  title: string
  description: string
  pagePath: string
}

const MetaHead = ({ title, description, pagePath }: Props): JSX.Element => (
  <Head>
    <title>{title}</title>
    <meta charSet="utf-8" />

    <meta httpEquiv="x-ua-compatible" content="ie=edge,chrome=1" />
    <meta name="format-detection" content="telephone=no" />
    <meta name="theme-color" content="#252525" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />

    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={`http://example.com/${pagePath}`} />
  </Head>
)

export { MetaHead }
