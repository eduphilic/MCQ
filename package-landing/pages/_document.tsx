/**
 * This page is rendered only server side. This page is used to add the
 * stylesheet from the Material UI library to the rendered HTML page.
 */

/* tslint:disable:import-name */
import { ServerStyleSheets } from "@material-ui/styles";
import NextDocumentPage, {
  DefaultDocumentIProps,
  Head,
  Html,
  Main,
  NextDocumentContext,
  NextScript,
} from "next/document";
import React from "react";
import flush from "styled-jsx/server";
import { FIREBASE_SDK_VERSION } from "../lib/firebase";

class DocumentPage extends NextDocumentPage {
  static async getInitialProps(
    context: NextDocumentContext,
  ): Promise<DefaultDocumentIProps> {
    const sheets = new ServerStyleSheets();
    const originalRenderPage = context.renderPage;

    context.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props => sheets.collect(<App {...props} />),
      });

    const initialProps = await NextDocumentPage.getInitialProps(context);

    return {
      ...initialProps,
      styles: (
        <React.Fragment>
          {sheets.getStyleElement()}
          {flush() || null}
        </React.Fragment>
      ),
    };
  }

  render() {
    return (
      <Html>
        <Head>
          <script
            defer
            src={`/__/firebase/${FIREBASE_SDK_VERSION}/firebase-app.js`}
          />
          <script
            defer
            src={`/__/firebase/${FIREBASE_SDK_VERSION}/firebase-auth.js`}
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default DocumentPage;
