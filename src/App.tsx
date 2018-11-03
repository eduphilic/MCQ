import { Router } from "@reach/router";
import React from "react";
import { SnackbarsProvider } from "./features/display";
import { LocalizationProvider } from "./features/localization";
import { AuthenticationStatusProvider } from "./features/session";
import { routes } from "./routes";
import { LightTheme, ThemeBaseline } from "./styled";

export const App = () => (
  <AuthenticationStatusProvider>
    <LocalizationProvider>
      <ThemeBaseline>
        <LightTheme>
          <SnackbarsProvider>
            <Router>{routes}</Router>
          </SnackbarsProvider>
        </LightTheme>
      </ThemeBaseline>
    </LocalizationProvider>
  </AuthenticationStatusProvider>
);
