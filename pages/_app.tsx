import App, { Container } from "next/app";
import React from "react";
import { Provider } from "react-redux";
import { RecaptchaProvider, withRecaptcha } from "../src/client/session";
import { withReduxStore, WithReduxStore } from "../src/client/store";

class MyApp extends App<WithReduxStore> {
  render() {
    const { Component, pageProps, reduxStore } = this.props;

    return (
      <Container>
        <Provider store={reduxStore}>
          <RecaptchaProvider>
            <Component {...pageProps} />
          </RecaptchaProvider>
        </Provider>
      </Container>
    );
  }
}

export default withReduxStore(withRecaptcha(MyApp));
