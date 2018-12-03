import Document, {
  DefaultDocumentIProps,
  Head,
  Main,
  NextDocumentContext,
  NextScript,
} from "next/document";
import React from "react";
import { ServerStyleSheet } from "styled-components";
import { GetHtmlConfigDocument, GetHtmlConfigQuery } from "../graphql";
import { initializeApollo } from "../lib/rendering";

type MyDocumentProps = Omit<GetHtmlConfigQuery, "__typename">;

export default class MyDocument extends Document<MyDocumentProps> {
  static async getInitialProps(ctx: NextDocumentContext) {
    const initialDocumentProps = await Document.getInitialProps(ctx);

    const apolloClient = initializeApollo();
    const htmlConfigQueryResult = await apolloClient.query<GetHtmlConfigQuery>({
      query: GetHtmlConfigDocument,
    });
    const htmlConfig = htmlConfigQueryResult.data.htmlConfig;

    const sheet = new ServerStyleSheet();

    const originalRenderPage = ctx.renderPage;
    ctx.renderPage = () =>
      originalRenderPage(App => props =>
        sheet.collectStyles(<App {...props} />),
      );

    const styles = (
      <>
        {initialDocumentProps.styles}
        {sheet.getStyleElement()}
      </>
    );

    const initialProps: DefaultDocumentIProps & MyDocumentProps = {
      ...initialDocumentProps,
      styles,
      htmlConfig,
    };

    return initialProps;
  }

  render() {
    const {
      htmlConfig: { googleAnalyticsId },
    } = this.props;

    return (
      <html>
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          {/* Material UI Font */}
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,700"
          />

          {/* Google Analytics */}
          {process.env.NODE_ENV === "production" && googleAnalyticsId && (
            <>
              <script
                key="googleTagManager"
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
              />
              <script
                key="googleAnalytics"
                dangerouslySetInnerHTML={{
                  __html: generateGoogleAnalyticsScriptContents(
                    googleAnalyticsId,
                  ),
                }}
              />
            </>
          )}
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

function generateGoogleAnalyticsScriptContents(googleAnalyticsId: string) {
  return `window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', '${googleAnalyticsId}');`
    .split("\n")
    .join("");
}
