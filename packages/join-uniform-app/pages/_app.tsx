import { ThemeBaseline } from "@join-uniform/theme";
import ApolloClient from "apollo-client";
import App, {
  AppProps,
  Container,
  DefaultAppIProps,
  NextAppContext,
} from "next/app";
import Head from "next/head";
import React from "react";
import { ApolloProvider, getDataFromTree } from "react-apollo";
import { initializeApollo } from "../lib/rendering";

// prettier-ignore
type MyAppProps = DefaultAppIProps & AppProps & {
  apolloClient: ApolloClient<any>;
  apolloState?: any;
};

export default class MyApp extends App<MyAppProps> {
  private readonly apolloClient: ApolloClient<any>;

  static async getInitialProps(ctx: NextAppContext) {
    const { Component, router } = ctx;

    const appProps = await App.getInitialProps(ctx);

    // Run all GraphQL queries in the component tree and extract the resulting
    // data.
    const apolloClient = initializeApollo();
    if (!process.browser) {
      try {
        // Run all GraphQL queries.
        await getDataFromTree(
          <MyApp
            {...appProps}
            Component={Component}
            router={router}
            apolloClient={apolloClient}
          />,
        );
      } catch (e) {
        // Prevent Apollo Client GraphQL errors from crashing SSR. Handle them
        // in components via the data.error prop:
        // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
        // tslint:disable-next-line:no-console
        console.error("Error while running `getDataFromTree`", e);
      }

      // getDataFromTree does not call componentWillUnmount.
      // Head side effect therefore need to be cleared manually.
      Head.rewind();
    }

    // Extract query data from Apollo store.
    const apolloState = apolloClient.cache.extract();

    return { ...appProps, apolloState };
  }

  constructor(props: MyAppProps) {
    super(props);

    this.apolloClient =
      props.apolloClient || initializeApollo(props.apolloState);
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <ApolloProvider client={this.apolloClient}>
          <ThemeBaseline>
            <Component {...pageProps} />
          </ThemeBaseline>
        </ApolloProvider>
      </Container>
    );
  }
}
