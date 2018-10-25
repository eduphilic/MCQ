import { createGenerateClassName, jssPreset } from "@material-ui/core/styles";
import { create } from "jss";
import lzString from "lz-string";
import React, { Component } from "react";
import { hydrate } from "react-dom";
import JssProvider from "react-jss/lib/JssProvider";
import { App } from "./app";

import { InMemoryCache } from "apollo-cache-inmemory";
import ApolloClient from "apollo-client";
import { ApolloLink } from "apollo-link";
import { onError } from "apollo-link-error";
import { HttpLink } from "apollo-link-http";
import { withClientState } from "apollo-link-state";
import { ApolloProvider } from "react-apollo";
import { resolvers } from "./clientResolvers";

const initialCacheState = JSON.parse(
  lzString.decompressFromUTF16(window.__STATE__),
);

const cache = new InMemoryCache().restore(initialCacheState);

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    );
  }
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const stateLink = withClientState({
  cache,
  resolvers,
});

/**
 * Attaches cross site request forgery (CSRF) tokens to outgoing requests. It
 * uses the initial token attached by the static site render and then updates it
 * as new tokens are provided in server responses.
 */
const csrfLink = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      ...operation.getContext().headers,
      "x-xsrf-token": window.__CSRF__,
    },
  });

  return forward!(operation).map(data => {
    const context = operation.getContext();
    if (!context.response || !context.response.headers) {
      throw new Error("[csrfLink] Unable to retrieve response headers.");
    }
    const csrfToken = (context.response as Response).headers.get(
      "x-xsrf-token",
    );
    if (!csrfToken) {
      throw new Error(
        "[csrfLink] Expected CSRF header was not attached to response.",
      );
    }
    window.__CSRF__ = csrfToken;
    return data;
  });
});

const httpLink = new HttpLink({ uri: "/graphql", credentials: "same-origin" });

const client = new ApolloClient({
  link: ApolloLink.from([errorLink, csrfLink, stateLink, httpLink]),
  cache,
});

// https://material-ui.com/customization/css-in-js/#other-html-element
const generateClassName = createGenerateClassName();
const jss = create({
  ...jssPreset(),
  insertionPoint: document.getElementById("jss-insertion-point")!,
});

// https://material-ui.com/guides/server-rendering/#the-client-side
class Main extends Component {
  componentDidMount() {
    const jssStyles = document.getElementById("jss-server-side");
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    return <App />;
  }
}

hydrate(
  <ApolloProvider client={client}>
    <JssProvider jss={jss} generateClassName={generateClassName}>
      <Main />
    </JssProvider>
  </ApolloProvider>,
  document.getElementById("root"),
);

if (module.hot) {
  module.hot.accept();
}

declare global {
  interface Window {
    __STATE__: string;
    __CSRF__: string;
  }
}
