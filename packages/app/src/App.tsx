import React from "react";
import { createProvider as createStoreProvider } from "store";

import { LightTheme, ThemeBaseline } from "theme";
import { LoginSessionLoader } from "./components/LoginSessionLoader";
import { SiteMap } from "./components/SiteMap";

const StoreProvider = createStoreProvider();

const App = () => (
  <StoreProvider>
    <>
      <LoginSessionLoader />
      <ThemeBaseline>
        <LightTheme>
          <SiteMap />
        </LightTheme>
      </ThemeBaseline>
    </>
  </StoreProvider>
);

export default App;
