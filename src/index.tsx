import React from "react";
import { hydrate, render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "store";

import App from "./App";

const rootElement = document.getElementById("root")!;
const renderFunc = rootElement.hasChildNodes() ? hydrate : render;

const store = createStore();

renderFunc(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root"),
);
