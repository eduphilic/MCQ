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
  const { children, title } = props;

  return (
    <>
      <Head>
        <title key="title">{title}</title>
      </Head>

      {children}
    </>
  );
}
