import { ApolloCache } from "apollo-cache";
import lzString from "lz-string";
import React, { ReactElement } from "react";

export type HtmlProps<Cache extends ApolloCache<any>> = {
  content: string;
  cache: Cache;
  assets: {
    client: {
      js: string;
      css?: string;
    };
  };
  materialUiCss: string;
  styledComponentsStyleElements: ReactElement<any>[];
  csrfToken: string;

  googleAnalyticsId?: string;
  metaKeywords?: string;
  metaDescription?: string;
  metaAuthor?: string;
  metaAbstract?: string;
  metaCopyright?: string;
};

const publicPath = "";

const googleAnalyticsScriptContents = (googleAnalyticsId: string) =>
  `window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', '${googleAnalyticsId}');`
    .split("\n")
    .join("");

export const Html = <Cache extends ApolloCache<any>>({
  content,
  cache,
  assets,
  materialUiCss,
  styledComponentsStyleElements,
  csrfToken,

  googleAnalyticsId,
  metaKeywords,
  metaDescription,
  metaAuthor,
  metaAbstract,
  metaCopyright,
}: HtmlProps<Cache>) => (
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,700"
      />

      {/* https://material-ui.com/customization/css-in-js/#css-injection-order */}
      <noscript id="jss-insertion-point" />

      {/* https://material-ui.com/guides/server-rendering/#inject-initial-component-html-and-css */}
      <style
        id="jss-server-side"
        dangerouslySetInnerHTML={{ __html: materialUiCss }}
      />

      {/* https://www.styled-components.com/docs/advanced#example */}
      {styledComponentsStyleElements}

      {assets.client.css && <link rel="stylesheet" href={assets.client.css} />}

      {/* Google Analytics */}
      {process.env.NODE_ENV === "production" &&
        googleAnalyticsId && (
          <>
            <script
              async
              src="https://www.googletagmanager.com/gtag/js?id=UA-117268366-1"
            />
            <script
              dangerouslySetInnerHTML={{
                __html: googleAnalyticsScriptContents(googleAnalyticsId),
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
      {metaDescription && <meta name="description" content={metaDescription} />}
      {metaAuthor && <meta name="author" content={metaAuthor} />}
      {metaAbstract && <meta name="abstract" content={metaAbstract} />}
      {metaCopyright && <meta name="copyright" content={metaCopyright} />}
    </head>

    <body>
      <div id="root" dangerouslySetInnerHTML={{ __html: content }} />
      <script
        charSet="UTF-8"
        dangerouslySetInnerHTML={{
          __html: `window.__STATE__=${JSON.stringify(
            lzString.compressToUTF16(JSON.stringify(cache.extract())),
          )}`,
        }}
      />
      <script
        charSet="UTF-8"
        dangerouslySetInnerHTML={{
          __html: `window.__CSRF__=${JSON.stringify(csrfToken)}`,
        }}
      />
      <script
        src={assets.client.js}
        defer
        crossOrigin={process.env.NODE_ENV !== "production" ? "true" : undefined}
      />
    </body>
  </html>
);
