import { LoadingSpinnerProvider } from "@join-uniform/components";
import { LightTheme, ThemeBaseline } from "@join-uniform/theme";
import App, { Container } from "next/app";
import React, { cloneElement, ReactElement, ReactNode } from "react";
import { ApolloProvider } from "react-apollo";
import {
  MaterialUIThemeProvider,
  RenderingAppProps,
  SubmissionProgressDialog,
  withApolloApp,
  withLoadingSpinnerApp,
  withMaterialUIApp,
  withTranslationApp,
} from "../lib/rendering";
import { CloudinaryProvider } from "../lib/utils";

class MyApp extends App<RenderingAppProps> {
  render() {
    const {
      Component,
      pageProps,
      apolloClient,
      muiCssContext,
      loadingSpinnerConfig,
      router,
    } = this.props;

    const composedProviders = composeProviders(
      <Container />,
      <ApolloProvider client={apolloClient!}><></></ApolloProvider>, // prettier-ignore
      <MaterialUIThemeProvider muiCssContext={muiCssContext!} />,
      <LightTheme />,
      <ThemeBaseline />,
      <LoadingSpinnerProvider {...loadingSpinnerConfig!} />,
      /^\/admin/.test(router.pathname) && <CloudinaryProvider />,
      <SubmissionProgressDialog />,
      <Component {...pageProps} muiCssContext={muiCssContext} />,
    );

    return composedProviders;
  }
}

export default withApolloApp(
  withMaterialUIApp(withLoadingSpinnerApp(withTranslationApp(MyApp))),
);

function composeProviders(
  ...providers: (ReactElement<{ children?: ReactNode }> | false)[]
) {
  const filteredProviders = providers.filter(
    (p): p is Exclude<typeof providers[0], boolean> => typeof p !== "boolean",
  );
  return filteredProviders.reduceRight((children, parent) => {
    return cloneElement(parent, {}, children);
  }, filteredProviders[0]);
}
