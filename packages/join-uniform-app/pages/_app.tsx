import ApolloClient from "apollo-client";
import NextApp, { Container } from "next/app";
import React from "react";
import { ApolloProvider } from "react-apollo";
import { withApolloClient } from "../lib/apollo";

class App extends NextApp<{ apolloClient: ApolloClient<any> }> {
  render() {
    const { Component, pageProps, apolloClient } = this.props;

    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApolloClient(App);
