/**
 * This page wraps all other pages. It is responsible for removing the server
 * side rendered CSS styles from the DOM as required by Material UI.
 */

/* tslint:disable:import-name */
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/styles";
import NextAppPage, {
  AppProps,
  Container,
  DefaultAppIProps,
  NextAppContext,
} from "next/app";
import React, { useEffect } from "react";
import { themes } from "../lib";

type AppPageProps = DefaultAppIProps & AppProps;

function AppPage(props: AppPageProps) {
  const { Component, pageProps } = props;

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }, []);

  return (
    <Container>
      <ThemeProvider theme={themes.light}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </Container>
  );
}

AppPage.getInitialProps = async (
  context: NextAppContext,
): Promise<DefaultAppIProps> => {
  const initialProps = await NextAppPage.getInitialProps(context);
  return initialProps;
};

export default AppPage;
