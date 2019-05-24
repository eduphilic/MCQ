import { ServerStyleSheets } from "@material-ui/styles";
import Document, {
  Head,
  Main,
  NextDocumentContext,
  NextScript,
} from "next/document";
import React, { cloneElement, DOMAttributes, ReactElement } from "react";
import flush from "styled-jsx/server";
import { theme } from "../src/display";

/**
 * Custom Next.js Document component. It adds support for Material UI's CSS
 * engine.
 *
 * @see https://github.com/mui-org/material-ui/tree/master/examples/nextjs-next-with-typescript
 */
class CustomDocument extends Document {
  render() {
    return (
      <html lang="en" dir="ltr">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
          <meta name="theme-color" content={theme.palette.primary.main} />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

CustomDocument.getInitialProps = async (context: NextDocumentContext) => {
  const sheets = new ServerStyleSheets();
  const originalRenderPage = context.renderPage;

  context.renderPage = () =>
    originalRenderPage({
      enhanceApp: App => props => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(context);

  return {
    ...initialProps,

    styles: (
      <>
        {trimCSSWhitespace(sheets.getStyleElement())}
        {flush() || null}
      </>
    ),
  };
};

export default CustomDocument;

/**
 * Remove extraneous whitespace from the Material UI stylesheet.
 *
 * @param styleElement Material UI stylesheet element.
 */
function trimCSSWhitespace(styleElement: ReactElement) {
  const typedStyledElement: ReactElement<
    Required<Pick<DOMAttributes<HTMLStyleElement>, "dangerouslySetInnerHTML">>
  > = styleElement;

  const clonedStyleElement = cloneElement(typedStyledElement, {
    dangerouslySetInnerHTML: {
      __html: typedStyledElement.props.dangerouslySetInnerHTML.__html
        .split("\n")
        .map(line => line.trim())
        .join(""),
    },
  });

  return clonedStyleElement;
}
