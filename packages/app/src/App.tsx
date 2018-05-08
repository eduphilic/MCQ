import React from "react";
import { hot } from "react-hot-loader";

import { LightTheme, ThemeBaseline } from "theme";
import { LoginSessionLoader } from "./components/LoginSessionLoader";
import { SiteMap } from "./components/SiteMap";

const App = () => (
  <>
    <LoginSessionLoader />
    <ThemeBaseline>
      <LightTheme>
        <SiteMap />
      </LightTheme>
    </ThemeBaseline>
  </>
);

export default hot(module)(App);
