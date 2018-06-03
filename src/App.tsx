import React from "react";
import { hot } from "react-hot-loader";

import { LightTheme, ThemeBaseline } from "theme";
import { PageTitleProvider } from "./components/PageTitleProvider";
import { SiteMap } from "./pages";

const App = () => (
  <ThemeBaseline>
    <LightTheme>
      <PageTitleProvider>
        <SiteMap />
      </PageTitleProvider>
    </LightTheme>
  </ThemeBaseline>
);

export default hot(module)(App);
