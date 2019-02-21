import { Request } from "express";
import { NextAppContext } from "next/app";
import React, { ComponentType } from "react";
import { getStoreFromPageContext, WithReduxStore } from "../store";
import { isNextComponentType } from "../util";
import { sessionActions } from "./actions";

export function withRecaptcha<P extends WithReduxStore>(App: ComponentType<P>) {
  function AppWithRecaptcha(props: P) {
    return <App {...props} />;
  }

  AppWithRecaptcha.getInitialProps = async (context: NextAppContext) => {
    let appProps = {};

    if (isNextComponentType(App)) {
      appProps = await App.getInitialProps!(context);
    }

    if (!process.browser && context.ctx.req) {
      const config = (context.ctx.req as Request).config;
      const recaptchaSiteKey = config.recaptcha.site_key;
      const reduxStore = getStoreFromPageContext(context.ctx);
      reduxStore.dispatch(
        sessionActions.setRecaptchaClientKey(recaptchaSiteKey),
      );
    }

    return appProps;
  };

  return AppWithRecaptcha;
}
