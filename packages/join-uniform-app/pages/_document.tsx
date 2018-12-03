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

const publicPath = "/static";

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
      htmlConfig: {
        googleAnalyticsId,
        metaKeywords,
        metaDescription,
        metaAuthor,
        metaAbstract,
        metaCopyright,
      },
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

          {/* Manifest and Favicon */}
          {/* prettier-ignore */}
          <>
            <link rel="apple-touch-icon" sizes="57x57" href={`${publicPath}/favicons/apple-icon-57x57.png`} />
            <link rel="apple-touch-icon" sizes="60x60" href={`${publicPath}/favicons/apple-icon-60x60.png`} />
            <link rel="apple-touch-icon" sizes="72x72" href={`${publicPath}/favicons/apple-icon-72x72.png`} />
            <link rel="apple-touch-icon" sizes="76x76" href={`${publicPath}/favicons/apple-icon-76x76.png`} />
            <link rel="apple-touch-icon" sizes="114x114" href={`${publicPath}/favicons/apple-icon-114x114.png`} />
            <link rel="apple-touch-icon" sizes="120x120" href={`${publicPath}/favicons/apple-icon-120x120.png`} />
            <link rel="apple-touch-icon" sizes="144x144" href={`${publicPath}/favicons/apple-icon-144x144.png`} />
            <link rel="apple-touch-icon" sizes="152x152" href={`${publicPath}/favicons/apple-icon-152x152.png`} />
            <link rel="apple-touch-icon" sizes="180x180" href={`${publicPath}/favicons/apple-icon-180x180.png`} />
            <link rel="icon" type="image/png" sizes="192x192" href={`${publicPath}/favicons/android-icon-192x192.png`} />
            <link rel="icon" type="image/png" sizes="32x32" href={`${publicPath}/favicons/favicon-32x32.png`} />
            <link rel="icon" type="image/png" sizes="96x96" href={`${publicPath}/favicons/favicon-96x96.png`} />
            <link rel="icon" type="image/png" sizes="16x16" href={`${publicPath}/favicons/favicon-16x16.png`} />
            <link rel="shortcut icon" href={`${publicPath}/favicon.ico`} />
            <meta name="msapplication-TileColor" content="#ffffff" />
            <meta name="msapplication-TileImage" content={`${publicPath}/favicons/ms-icon-144x144.png`} />
            <meta name="theme-color" content="#ffffff" />
            <link rel="manifest" href={`${publicPath}/manifest.json`} />
          </>

          {/* Keywords and Meta Tags */}
          {metaKeywords && <meta name="keywords" content={metaKeywords} />}
          {metaDescription && (
            <meta name="description" content={metaDescription} />
          )}
          {metaAuthor && <meta name="author" content={metaAuthor} />}
          {metaAbstract && <meta name="abstract" content={metaAbstract} />}
          {metaCopyright && <meta name="copyright" content={metaCopyright} />}
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
