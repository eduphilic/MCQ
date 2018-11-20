import React from "react";
import { hydrate } from "react-dom";
import { preloadReady } from "react-loadable";
import { App } from "../App";
import { createClientWrapper } from "./createClientWrapper";

// tslint:disable-next-line:no-floating-promises
preloadReady().then(() => {
  const ClientWrapper = createClientWrapper();

  hydrate(
    <ClientWrapper>
      <App />
    </ClientWrapper>,
    document.getElementById("root"),
  );
});

if (module.hot) {
  module.hot.accept();
}
