import ApolloClient from "apollo-client";
import { AppComponentType, DefaultAppIProps, NextAppContext } from "next/app";
import Head from "next/head";
import React, { Component as ReactComponent } from "react";
import { getDataFromTree } from "react-apollo";
import { RenderingAppProps } from "../RenderingAppProps";
import { initializeApollo } from "./initializeApollo";

export function withApolloApp(
  App: AppComponentType<RenderingAppProps, DefaultAppIProps>,
) {
  const WithApolloApp: AppComponentType<
    RenderingAppProps,
    DefaultAppIProps
  > = class extends ReactComponent<RenderingAppProps> {
    static readonly displayName = "WithApolloApp(App)";
    private readonly client: ApolloClient<any>;

    static async getInitialProps(context: NextAppContext) {
      const { Component, router } = context;

      // tslint:disable-next-line:no-object-literal-type-assertion
      let initialProps = {} as RenderingAppProps;
      if (App.getInitialProps) {
        initialProps = (await App.getInitialProps(
          context,
        )) as RenderingAppProps;
      }

      const client = initializeApollo();

      // Run all GraphQL queries in the component tree and extract the resulting
      // data.
      if (!process.browser) {
        try {
          await getDataFromTree(
            <WithApolloApp
              {...initialProps}
              Component={Component}
              router={router}
              serverSideApolloClient={client}
            />,
          );
        } catch (e) {
          // Prevent Apollo Client GraphQL errors from crashing SSR. Handle them
          // in components via the data.error prop:
          // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
          // tslint:disable-next-line:no-console
          console.error('Error while running "getDataFromTree"', e);
        }

        // getDataFromTree does not call componentWillUnmount.
        // Head side effect therefore need to be cleared manually.
        Head.rewind();
      }

      // Extract query data from Apollo store.
      initialProps.apolloState = client.cache.extract();

      return initialProps;
    }

    constructor(props: RenderingAppProps) {
      super(props);

      this.client =
        props.serverSideApolloClient || initializeApollo(props.apolloState);
    }

    render() {
      return <App {...this.props} apolloClient={this.client} />;
    }
  };

  return WithApolloApp;
}
