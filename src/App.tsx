import React from "react";
import { hot } from "react-hot-loader";

import { PageTitleProvider } from "components/PageTitleProvider";
import { LightTheme, ThemeBaseline } from "theme";
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
