import App, { Container } from "next/app";
import React from "react";
import { ApolloProvider } from "react-apollo";
import {
  MaterialUIThemeProvider,
  RenderingAppProps,
  withApolloApp,
  withMaterialUIApp,
} from "../lib/rendering";

class MyApp extends App<RenderingAppProps> {
  render() {
    const { Component, pageProps, apolloClient, muiCssContext } = this.props;

    return (
      <Container>
        <ApolloProvider client={apolloClient!}>
          <MaterialUIThemeProvider muiCssContext={muiCssContext!}>
            <Component {...pageProps} muiCssContext={muiCssContext} />
          </MaterialUIThemeProvider>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApolloApp(withMaterialUIApp(MyApp));
