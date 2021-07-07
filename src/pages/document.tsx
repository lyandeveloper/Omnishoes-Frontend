import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel='preconnect' href='https://fonts.googleapis.com'></link>
          <link
            href='https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap'
            rel='stylesheet'
          ></link>
          <link rel='icon' type='image/png' href='/favicon.png' />
          <title>Seja bem-vindo à OmniShoes</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
