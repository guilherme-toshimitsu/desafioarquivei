import React from "react";
import NextDocument, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

class MyDocument extends NextDocument {
  render() {
    return (
      <html>
        <Head>
          <link rel="stylesheet" href="/normalize.css" />
          <link
            rel="shortcut icon"
            href="https://cdn-landing.arquivei.com.br/wp-content/themes/pure-arquivei/favicon.png?x42936"
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          ></meta>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const sheet = new ServerStyleSheet();
  const originalRenderPage = ctx.renderPage;
  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
      });
    const initialProps = await NextDocument.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: [
        ...React.Children.toArray(initialProps.styles),
        sheet.getStyleElement(),
      ],
    };
  } finally {
    sheet.seal();
  }
};

export default MyDocument;
