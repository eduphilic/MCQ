import { Router } from "@reach/router";
import React from "react";
import { LocalizationProvider } from "./features/localization";
import { AdminLoginPage, RootIndexPage } from "./pages";
import { LightTheme, ThemeBaseline } from "./styled";

export const App = () => (
  <ThemeBaseline>
    <LightTheme>
      <LocalizationProvider>
        <Router>
          <RootIndexPage path="/" />
          <AdminLoginPage path="/admin/login" />
        </Router>
      </LocalizationProvider>
    </LightTheme>
  </ThemeBaseline>
);
