import React from "react";
import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    /* eslint-disable-next-line no-use-before-define */
    const { page, styleTags } = addStyleSheetsFromStyledComponents(renderPage);
    return { ...page, styleTags };
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <title>Join Uniform</title>
          {/* Roboto font for Material UI component library. */}
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:400,700"
            rel="stylesheet"
          />
          {/* Material UI icon font. */}
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

function addStyleSheetsFromStyledComponents(renderPage) {
  // We use the library called Styled-Components to provide CSS styles for
  // components. This extracts all the component styles and injects them into
  // the document <head> element.
  // https://www.styled-components.com/docs/advanced#nextjs
  const sheet = new ServerStyleSheet();
  const page = renderPage(App => props =>
    sheet.collectStyles(<App {...props} />),
  );
  const styleTags = sheet.getStyleElement();
  return { page, styleTags };
}
