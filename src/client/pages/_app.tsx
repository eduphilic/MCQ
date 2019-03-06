// This needs to be imported first to initialize the new Material UI style
// engine.
import "../bootstrapMaterialUIStyles";

import App, { Container } from "next/app";
import React from "react";
import { Provider } from "react-redux";
import {
  PageLoadIndicator,
  ThemeBaseline,
  WithMaterialUI,
  withMaterialUIApp,
} from "../display";
import { RecaptchaProvider } from "../session";
import { withReduxStore, WithReduxStore } from "../store";

class MyApp extends App<WithReduxStore & WithMaterialUI> {
  render() {
    const { Component, StyleProvider, pageProps, reduxStore } = this.props;

    return (
      <Container>
        <StyleProvider>
          <ThemeBaseline>
            <PageLoadIndicator />

            <Provider store={reduxStore}>
              <RecaptchaProvider>
                <Component {...pageProps} />
              </RecaptchaProvider>
            </Provider>
          </ThemeBaseline>
        </StyleProvider>
      </Container>
    );
  }
}

export default withMaterialUIApp(withReduxStore(MyApp));
