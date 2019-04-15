// This is imported here to ensure the new Material UI styling engine is
// initialized first.
// Ref: https://material-ui.com/css-in-js/basics/#migration-for-material-ui-core-users
import "../lib/rendering/bootstrapMaterialUiStyles";

import Document, { Head, Main, NextScript } from "next/document";
import React from "react";
import {
  withHtmlSeoDocument,
  withMaterialUIDocument,
  withStyledComponentsDocument,
} from "../lib/rendering";

class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default withHtmlSeoDocument(
  withMaterialUIDocument(withStyledComponentsDocument(MyDocument)),
);
