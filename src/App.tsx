import { Router } from "@reach/router";
import React from "react";
import { SnackbarsProvider } from "./features/display";
import { LanguageProvider } from "./features/localization";
import { AuthenticationStatusProvider } from "./features/session";
import { routes } from "./routes";
import { LightTheme, ThemeBaseline } from "./styled";

export const App = () => (
  <AuthenticationStatusProvider>
    <LanguageProvider>
      <ThemeBaseline>
        <LightTheme>
          <SnackbarsProvider>
            <Router>{routes}</Router>
          </SnackbarsProvider>
        </LightTheme>
      </ThemeBaseline>
    </LanguageProvider>
  </AuthenticationStatusProvider>
);
