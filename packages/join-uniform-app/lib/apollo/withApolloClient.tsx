import ApolloClient from "apollo-client";
import { AppComponentType, NextAppContext } from "next/app";
import Head from "next/head";
import React, { Component, ComponentType } from "react";
import { getDataFromTree } from "react-apollo";
import { initializeApollo } from "./initializeApollo";

// type WithApolloClient = {
//   apolloClient: ApolloClient<any>;
//   Component: ComponentType<any>;
// };

export function withApolloClient<Props>(
  WrappedComponent: any, // ComponentType<Props & WithApolloClient>,
) {
  type ApolloHocProps = Props & { apolloState?: any };

  return class ApolloHoc extends Component<ApolloHocProps> {
    static displayName = "withApollo(WrappedComponent)";
    private readonly apolloClient: ApolloClient<any>;

    static async getInitialProps(ctx: NextAppContext) {
      const { Component: TargetComponent, router } = ctx;

      let appProps = {};
      if (hasGetInitialProps(WrappedComponent)) {
        appProps = await WrappedComponent.getInitialProps!(ctx);
      }

      // Run all GraphQL queries in the component tree and extract the resulting
      // data.
      const apolloClient = initializeApollo();
      if (!process.browser) {
        try {
          // Run all GraphQL queries.
          await getDataFromTree(
            <WrappedComponent
              {...appProps}
              Component={TargetComponent}
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

      return {
        ...appProps,
        apolloState,
      };
    }

    constructor(props: ApolloHocProps) {
      super(props);

      this.apolloClient = initializeApollo(props.apolloState);
    }

    render() {
      // @ts-ignore
      const { apolloState, ...rest } = this.props;

      return <WrappedComponent {...rest} apolloClient={this.apolloClient} />;
    }
  };
}

function hasGetInitialProps(
  WrappedComponent: ComponentType<any>,
): WrappedComponent is AppComponentType {
  return Boolean((WrappedComponent as any).getInitialProps);
}
