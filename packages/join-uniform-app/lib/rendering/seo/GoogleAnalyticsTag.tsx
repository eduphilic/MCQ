import React from "react";

export function GoogleAnalyticsTags(props: {
  googleAnalyticsId: string | null;
}) {
  const { googleAnalyticsId } = props;

  return (
    <>
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
              __html: generateGoogleAnalyticsScriptContents(googleAnalyticsId),
            }}
          />
        </>
      )}
    </>
  );
}

function generateGoogleAnalyticsScriptContents(googleAnalyticsId: string) {
  return `window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', '${googleAnalyticsId}');`
    .split("\n")
    .join("");
}
