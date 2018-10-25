import { Router } from "@reach/router";
import React from "react";
import { LocalizationProvider } from "./features/localization";
import { AdminDashboardPage, AdminLoginPage, RootIndexPage } from "./pages";
import { LightTheme, ThemeBaseline } from "./styled";

export const App = () => (
  <LocalizationProvider>
    <ThemeBaseline>
      <LightTheme>
        <Router>
          <RootIndexPage path="/" />
          <AdminLoginPage path="/admin/login" />
          <AdminDashboardPage path="/admin/dashboard" />
        </Router>
      </LightTheme>
    </ThemeBaseline>
  </LocalizationProvider>
);
