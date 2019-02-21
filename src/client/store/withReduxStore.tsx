import { NextComponentType } from "next";
import { NextAppContext } from "next/app";
import React, { Component, ComponentType } from "react";
import { Store } from "redux";
import { createStore } from "./createStore";
import { StoreState } from "./StoreState";

const __NEXT_REDUX_STORE__ = "__NEXT_REDUX_STORE__";

function getOrCreateStore(initialState?: StoreState) {
  // Prevent store from leaking between requests by creating a new instance when
  // running on the server.
  if (!process.browser) {
    return createStore(initialState);
  }

  // Create store if it has not already been initialized.
  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = createStore(initialState);
  }

  return window[__NEXT_REDUX_STORE__]!;
}

export type WithReduxStore = { reduxStore: Store };

type Props = {
  initialReduxState: StoreState;
};

function isNextComponentType<P>(
  App: ComponentType<P>,
): App is NextComponentType<P, P, NextAppContext> {
  return (
    typeof (App as NextComponentType<P, P, NextAppContext>).getInitialProps ===
    "function"
  );
}

export function withReduxStore<P = {}>(App: ComponentType<P & WithReduxStore>) {
  return class AppWithRedux extends Component<P & Props> {
    static async getInitialProps(context: NextAppContext) {
      const reduxStore = getOrCreateStore();

      let appProps = {};
      if (isNextComponentType(App)) {
        appProps = await App.getInitialProps!(context);
      }

      return {
        ...appProps,
        initialReduxState: reduxStore.getState(),
      };
    }

    private reduxStore: Store;

    constructor(props: P & Props) {
      super(props);
      this.reduxStore = getOrCreateStore(props.initialReduxState);
    }

    render() {
      return <App {...this.props} reduxStore={this.reduxStore} />;
    }
  };
}

declare global {
  interface Window {
    __NEXT_REDUX_STORE__?: Store<StoreState>;
  }
}
