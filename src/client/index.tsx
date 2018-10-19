import ApolloClient, { InMemoryCache } from "apollo-boost";
import React from "react";
import { ApolloProvider } from "react-apollo";
import { hydrate } from "react-dom";
import { App } from "../app";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
});

hydrate(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root"),
);

if (module.hot) {
  module.hot.accept();
}

declare global {
  interface Window {
    __APOLLO_STATE__: any;
  }
}
