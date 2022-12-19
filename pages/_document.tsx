import React from 'react'
import Document, { DocumentContext, DocumentInitialProps, Html, Head, Main, NextScript } from 'next/document'

// CssBaseline: compatibilidad de los estilos con otros navegadores
import { CssBaseline } from '@nextui-org/react'
import Script from 'next/script'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)

    // or styles: <>{ initialProps.styles }</> 
    return {
      ...initialProps,
      styles: React.Children.toArray([initialProps.styles])
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {CssBaseline.flush()}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument