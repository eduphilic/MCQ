import NextDocument, { NextDocumentContext } from "next/document";
import React from "react";
import { ServerStyleSheet } from "styled-components";

export default class Document extends NextDocument {
  static async getInitialProps(ctx: NextDocumentContext) {
    const sheet = new ServerStyleSheet();

    const originalRenderPage = ctx.renderPage;
    ctx.renderPage = () =>
      originalRenderPage(App => props =>
        sheet.collectStyles(<App {...props} />),
      );

    const initialProps = await NextDocument.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: [...(initialProps.styles as any), ...sheet.getStyleElement()],
    };
  }
}
