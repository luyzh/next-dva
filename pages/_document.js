import Document, { Head, Main, NextScript } from 'next/document'

export default class extends Document {
  render() {
    return (
      <html>
        <Head>
          <title>react ssr</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"
            key="viewport"
          />
          <meta charSet="utf-8" />
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/antd-mobile@2.2.3/dist/antd-mobile.css" />
          <link rel="stylesheet" href="/_next/static/style.css" />
        </Head>
        <body style={{ margin: 0 }}>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
