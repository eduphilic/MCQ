import App, { Container } from "next/app";
import React from "react";
import {
  PageLoadIndicator,
  ThemeBaseline,
  WithMaterialUI,
  withMaterialUIApp,
} from "../display";

class MyApp extends App<WithMaterialUI> {
  render() {
    const { Component, StyleProvider, pageProps } = this.props;

    return (
      <Container>
        <StyleProvider>
          <ThemeBaseline>
            <PageLoadIndicator />

            <Component {...pageProps} />
          </ThemeBaseline>
        </StyleProvider>
      </Container>
    );
  }
}

export default withMaterialUIApp(MyApp);
