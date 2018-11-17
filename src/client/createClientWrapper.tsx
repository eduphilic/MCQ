import { createGenerateClassName, jssPreset } from "@material-ui/core/styles";
import { create } from "jss";
import React, { ReactNode } from "react";

import { InMemoryCache } from "apollo-cache-inmemory";
import ApolloClient from "apollo-client";
import { ApolloLink } from "apollo-link";
import lzString from "lz-string";
import { ApolloProvider } from "react-apollo";
import { JssProvider } from "react-jss";
import { csrfLink, errorLink, httpLink } from "./links";

export function createClientWrapper(storybook?: boolean) {
  let cache = new InMemoryCache();

  // Don't attempt to restore server side rendered state in Storybook.
  if (!storybook) {
    const initialCacheState = JSON.parse(
      lzString.decompressFromUTF16(window.__STATE__!),
    );

    cache = cache.restore(initialCacheState);
  }

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, csrfLink, httpLink]),
    cache,
  });

  // https://material-ui.com/customization/css-in-js/#other-html-element
  const generateClassName = createGenerateClassName();
  const jss = create({
    ...jssPreset(),
    insertionPoint: document.getElementById("jss-insertion-point")!,
  });

  // https://material-ui.com/guides/server-rendering/#the-client-side
  const jssStyles = document.getElementById("jss-server-side");
  if (jssStyles && jssStyles.parentNode) {
    jssStyles.parentNode.removeChild(jssStyles);
  }

  return function ClientWrapper(props: { children?: ReactNode }) {
    return (
      <ApolloProvider client={client}>
        <JssProvider jss={jss} generateClassName={generateClassName}>
          {props.children}
        </JssProvider>
      </ApolloProvider>
    );
  };
}

declare global {
  interface Window {
    __STATE__?: string;
  }
}
