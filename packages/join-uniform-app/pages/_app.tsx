import {
  LoadingSpinnerContextValue,
  LoadingSpinnerProvider,
} from "@join-uniform/components";
import {
  GetLogoConfigDocument,
  GetLogoConfigQuery,
} from "@join-uniform/graphql";
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
import { createResponsiveImageUrl } from "../lib/utils";

type MyAppProps = {
  apolloClient?: ApolloClient<any>;
  apolloState?: any;
  loadingSpinnerConfig?: LoadingSpinnerContextValue;
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
    const loadingSpinnerConfig = await fetchLoadingSpinnerConfig(apolloClient);
    if (!process.browser) {
      try {
        // Run all GraphQL queries.
        await getDataFromTree(
          <MyApp
            {...initialAppProps}
            Component={Component}
            router={router}
            apolloClient={apolloClient}
            loadingSpinnerConfig={loadingSpinnerConfig}
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
      loadingSpinnerConfig,
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
    const { Component, pageProps, loadingSpinnerConfig } = this.props;

    if (!loadingSpinnerConfig) {
      throw new Error("Expected loading spinner configuration.");
    }

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
                <LoadingSpinnerProvider {...loadingSpinnerConfig}>
                  <Component
                    muiCssContext={this.muiCssContext}
                    {...pageProps}
                  />
                </LoadingSpinnerProvider>
              </ThemeBaseline>
            </MuiThemeProvider>
          </JssProvider>
        </ApolloProvider>
      </Container>
    );
  }
}

async function fetchLoadingSpinnerConfig(client: ApolloClient<any>) {
  const logoUrl = (await client.query<GetLogoConfigQuery>({
    query: GetLogoConfigDocument,
  })).data.logoConfig.url;
  const loadingSpinnerConfig: LoadingSpinnerContextValue = {
    src1_0x: createResponsiveImageUrl(logoUrl, {
      w: "72",
      h: "72",
      format: "png",
    }),
    src1_5x: createResponsiveImageUrl(logoUrl, {
      w: "105",
      h: "105",
      format: "png",
    }),
    src2_0x: createResponsiveImageUrl(logoUrl, {
      w: "144",
      h: "144",
      format: "png",
    }),
  };
  return loadingSpinnerConfig;
}
