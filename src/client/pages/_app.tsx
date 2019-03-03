import App, { Container } from "next/app";
import React from "react";
import { Provider } from "react-redux";
import { RecaptchaProvider } from "../session";
import { withReduxStore, WithReduxStore } from "../store";

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

export default withReduxStore(MyApp);
