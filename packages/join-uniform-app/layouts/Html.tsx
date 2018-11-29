import Head from "next/head";
import React, { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  title: string;
};

/**
 * Adds meta tags and page title to pages. It is used as a base by other
 * layouts.
 */
export function Html(props: Props) {
  return (
    <>
      <Head>
        <title>{props.title}</title>

        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,700"
        />
      </Head>

      {props.children}
    </>
  );
}
