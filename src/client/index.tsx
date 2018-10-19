import { createGenerateClassName, jssPreset } from "@material-ui/core/styles";
import ApolloClient, { InMemoryCache } from "apollo-boost";
import { create } from "jss";
import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";
import { hydrate } from "react-dom";
import JssProvider from "react-jss/lib/JssProvider";
import { App } from "../app";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
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
    __APOLLO_STATE__: any;
  }
}
