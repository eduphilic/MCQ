import React from "react";
import { hot } from "react-hot-loader";
import { Provider } from "react-redux";
import { createStore } from "store";
import { LightTheme } from "theme";

import { SiteMap } from "./pages";

const store = createStore();

const App = () => (
  <Provider store={store}>
    <LightTheme>
      <SiteMap />
    </LightTheme>
  </Provider>
);

export default hot(module)(App);
