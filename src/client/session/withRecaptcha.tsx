// @ts-ignore
import { Request } from "express";
import { NextAppContext } from "next/app";
import React, { ComponentType } from "react";
// @ts-ignore
import { Unsubscribe } from "redux";
// @ts-ignore
import { fromEventPattern, of } from "rxjs";
// @ts-ignore
import { switchMap } from "rxjs/operators";
// @ts-ignore
import { getStoreFromPageContext, WithReduxStore } from "../store";
import { isNextComponentType } from "../util";
// @ts-ignore
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
      // // const config = (context.ctx.req as Request).config;
      // // const recaptchaSiteKey = config.recaptcha.site_key;
      // const reduxStore = getStoreFromPageContext(context.ctx);
      // // reduxStore.dispatch(
      // //   sessionActions.setRecaptchaClientKey(recaptchaSiteKey),
      // // );
      // // reduxStore.subscribe
      // const state = reduxStore.getState();
      // const { error, fetched, fetching } = state.session.recaptcha;
      // if (error) throw error;
      //
      // if (!fetched) {
      //   const state$ = fromEventPattern(
      //     handler => reduxStore.subscribe(handler),
      //     (_handler, unsubscribe: Unsubscribe) => unsubscribe(),
      //   ).pipe(switchMap(() => of(reduxStore.getState())));
      // }
    }

    return appProps;
  };

  return AppWithRecaptcha;
}
