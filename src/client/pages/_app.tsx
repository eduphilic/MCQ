// This needs to be imported first to initialize the new Material UI style
// engine.
import "../bootstrapMaterialUIStyles";

import App, { Container } from "next/app";
import React from "react";
import { Provider } from "react-redux";
import { ThemeBaseline, WithMaterialUI, withMaterialUIApp } from "../display";
import { RecaptchaProvider } from "../session";
import { withReduxStore, WithReduxStore } from "../store";

class MyApp extends App<WithReduxStore & WithMaterialUI> {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps, reduxStore, pageContext } = this.props;

    return (
      <Container>
        <ThemeBaseline>
          <Provider store={reduxStore}>
            <RecaptchaProvider>
              <Component {...pageProps} pageContext={pageContext} />
            </RecaptchaProvider>
          </Provider>
        </ThemeBaseline>
      </Container>
    );
  }
}

export default withMaterialUIApp(withReduxStore(MyApp));
