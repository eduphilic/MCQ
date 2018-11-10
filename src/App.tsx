import { Router } from "@reach/router";
import React from "react";
import { SnackbarsProvider } from "./features/display";
import { LanguageProvider } from "./features/localization";
import { SessionProvider } from "./features/session";
import { routes } from "./routes";
import { LightTheme, ThemeBaseline } from "./styled";

export const App = () => (
  <SessionProvider>
    <LanguageProvider>
      <ThemeBaseline>
        <LightTheme>
          <SnackbarsProvider>
            <Router>{routes}</Router>
          </SnackbarsProvider>
        </LightTheme>
      </ThemeBaseline>
    </LanguageProvider>
  </SessionProvider>
);
