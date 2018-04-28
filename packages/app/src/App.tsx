import React from "react";
import { createProvider as createStoreProvider } from "store";

import { LightTheme, ThemeBaseline } from "theme";
import { SiteMap } from "./SiteMap";

const StoreProvider = createStoreProvider();

const App = () => (
  <StoreProvider>
    <ThemeBaseline>
      <LightTheme>
        <SiteMap />
      </LightTheme>
    </ThemeBaseline>
  </StoreProvider>
);

export default App;
