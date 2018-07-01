import React from "react";
import { hot } from "react-hot-loader";
import { LightTheme, ThemeBaseline } from "theme";

import { SiteMap } from "./pages";

const App = () => (
  <ThemeBaseline>
    <LightTheme>
      <SiteMap />
    </LightTheme>
  </ThemeBaseline>
);

export default hot(module)(App);
