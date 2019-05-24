import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import App, { Container } from "next/app";
import Head from "next/head";
import React from "react";
import "typeface-montserrat";
import { theme } from "../src/display";

/**
 * Custom Next.js App component. It removes the server side rendered CSS from
 * the DOM so that the client side modified CSS can take over. It also applies
 * the theme.
 */
class CustomApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentNode!.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Head />

        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </Container>
    );
  }
}

export default CustomApp;
