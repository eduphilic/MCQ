import React from "react";
import { hydrate, render } from "react-dom";

import { createProvider as createStoreProvider } from "store";
import App from "./App";

const StoreProvider = createStoreProvider();

const rootElement = document.getElementById("root")!;
const renderFunc = rootElement.hasChildNodes() ? hydrate : render;

renderFunc(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById("root"),
);
