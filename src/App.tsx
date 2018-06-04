import React from "react";
import { hot } from "react-hot-loader";

import { PageTitleStore } from "stores";
import { LightTheme, ThemeBaseline } from "theme";
import { SiteMap } from "./pages";

const App = () => (
  <ThemeBaseline>
    <LightTheme>
      <PageTitleStore.Provider>
        <SiteMap />
      </PageTitleStore.Provider>
    </LightTheme>
  </ThemeBaseline>
);

export default hot(module)(App);
