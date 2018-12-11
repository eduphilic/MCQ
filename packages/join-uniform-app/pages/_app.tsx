import { LightTheme, ThemeBaseline } from "@join-uniform/theme";
import App, { Container } from "next/app";
import React, { cloneElement, ReactElement, ReactNode } from "react";
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

    const composedProviders = composeProviders(
      <Container />,
      <ApolloProvider client={apolloClient!}><></></ApolloProvider>, // prettier-ignore
      <MaterialUIThemeProvider muiCssContext={muiCssContext!} />,
      <LightTheme />,
      <ThemeBaseline />,
      <Component {...pageProps} muiCssContext={muiCssContext} />,
    );

    return composedProviders;
  }
}

export default withApolloApp(withMaterialUIApp(MyApp));

function composeProviders(
  ...providers: ReactElement<{ children?: ReactNode }>[]
) {
  return providers.reduceRight((children, parent) => {
    return cloneElement(parent, {}, children);
  }, providers[0]);
}
