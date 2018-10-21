import { Router } from "@reach/router";
import React from "react";
import { RootIndexPage } from "./pages";
import { LightTheme, ThemeBaseline } from "./styled";

export const App = () => (
  <ThemeBaseline>
    <LightTheme>
      <Router>
        <RootIndexPage path="/" />
      </Router>
    </LightTheme>
  </ThemeBaseline>
);
