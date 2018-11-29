import Head from "next/head";
import React, { ReactNode } from "react";
import { GetHtmlConfigHOC } from "../graphql";

type Props = {
  children?: ReactNode;
  title: string;
};

/**
 * Adds meta tags and page title to pages. It is used as a base by other
 * layouts.
 */
export const Html = GetHtmlConfigHOC<{}, Props>({})(props => {
  const { loading, error, htmlConfig } = props.data!;
  if (loading || error || !htmlConfig) return null;

  const { googleAnalyticsId } = htmlConfig;

  return (
    <Head>
      <title key="title">{props.title}</title>

      <meta key="charSet" charSet="utf-8" />
      <meta key="httpEquiv" httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        key="viewport"
        name="viewport"
        content="width=device-width, initial-scale=1"
      />

      {/* Material UI Font */}
      <link
        key="font"
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,700"
      />

      {/* Google Analytics */}
      {process.env.NODE_ENV !== "production" && googleAnalyticsId && (
        <>
          <script
            key="googleTagManager"
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
          />
          <script
            key="googleAnalytics"
            dangerouslySetInnerHTML={{
              __html: generateGoogleAnalyticsScriptContents(googleAnalyticsId),
            }}
          />
        </>
      )}
    </Head>
  );
});

function generateGoogleAnalyticsScriptContents(googleAnalyticsId: string) {
  return `window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', '${googleAnalyticsId}');`
    .split("\n")
    .join("");
}
