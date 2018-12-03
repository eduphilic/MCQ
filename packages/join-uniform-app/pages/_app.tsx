import { lightTheme, ThemeBaseline } from "@join-uniform/theme";
import { jssPreset, MuiThemeProvider } from "@material-ui/core/styles";
import ApolloClient from "apollo-client";
import { create, JSS } from "jss";
import App, {
  AppProps,
  Container,
  DefaultAppIProps,
  NextAppContext,
} from "next/app";
import Head from "next/head";
import React from "react";
import { ApolloProvider, getDataFromTree } from "react-apollo";
import JssProvider from "react-jss/lib/JssProvider";
import {
  createMuiCssContext,
  initializeApollo,
  MUICssContext,
} from "../lib/rendering";

type MyAppProps = {
  apolloClient?: ApolloClient<any>;
  apolloState?: any;
};

export default class MyApp extends App<MyAppProps> {
  private readonly apolloClient: ApolloClient<any>;
  private readonly muiCssContext: MUICssContext;

  static async getInitialProps(ctx: NextAppContext) {
    const { Component, router } = ctx;

    const initialAppProps = await App.getInitialProps(ctx);

    // Run all GraphQL queries in the component tree and extract the resulting
    // data.
    const apolloClient = initializeApollo();
    if (!process.browser) {
      try {
        // Run all GraphQL queries.
        await getDataFromTree(
          <MyApp
            {...initialAppProps}
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

    const initialProps: DefaultAppIProps & MyAppProps = {
      ...initialAppProps,
      apolloState,
    };

    return initialProps;
  }

  constructor(props: DefaultAppIProps & AppProps & MyAppProps) {
    super(props);

    this.apolloClient =
      props.apolloClient || initializeApollo(props.apolloState);
    this.muiCssContext = createMuiCssContext();
  }

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    let jss: JSS | undefined;
    if (process.browser) {
      jss = create({
        ...jssPreset(),
        insertionPoint: document.getElementById("jss-insertion-point")!,
      });
    }

    return (
      <Container>
        <ApolloProvider client={this.apolloClient}>
          <JssProvider
            jss={jss}
            registry={this.muiCssContext.sheetsRegistry}
            generateClassName={this.muiCssContext.generateClassName}
          >
            <MuiThemeProvider
              theme={lightTheme}
              sheetsManager={this.muiCssContext.sheetsManager}
            >
              <ThemeBaseline>
                <Component muiCssContext={this.muiCssContext} {...pageProps} />
              </ThemeBaseline>
            </MuiThemeProvider>
          </JssProvider>
        </ApolloProvider>
      </Container>
    );
  }
}
