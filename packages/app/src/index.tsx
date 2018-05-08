import React from "react";
import ReactDOM from "react-dom";

import { createProvider as createStoreProvider } from "store";
import App from "./App";

const StoreProvider = createStoreProvider();

ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById("root"),
);
