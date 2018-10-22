import { createGenerateClassName, jssPreset } from "@material-ui/core/styles";
import ApolloClient, { InMemoryCache } from "apollo-boost";
import { create } from "jss";
import lzString from "lz-string";
import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";
import { hydrate } from "react-dom";
import JssProvider from "react-jss/lib/JssProvider";
import { App } from "./app";
import { initialState, resolvers } from "./store-client";

const initialCacheState = JSON.parse(
  lzString.decompressFromUTF16(window.__STATE__),
);

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache().restore(initialCacheState),
  clientState: {
    defaults: initialState,
    resolvers,
  },
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
  }
}
