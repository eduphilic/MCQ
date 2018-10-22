import { Router } from "@reach/router";
import React from "react";
import { LocalizationProvider } from "./features/localization";
import { RootIndexPage } from "./pages";
import { LightTheme, ThemeBaseline } from "./styled";

export const App = () => (
  <ThemeBaseline>
    <LightTheme>
      <LocalizationProvider>
        <Router>
          <RootIndexPage path="/" />
        </Router>
      </LocalizationProvider>
    </LightTheme>
  </ThemeBaseline>
);
