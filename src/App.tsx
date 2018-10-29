import { Router } from "@reach/router";
import React from "react";
import { SnackbarsProvider } from "./features/display";
import { LocalizationProvider } from "./features/localization";
import { AuthenticationStatusProvider } from "./features/session";
import { AdminDashboardPage, AdminLoginPage, RootIndexPage } from "./pages";
import { LightTheme, ThemeBaseline } from "./styled";

export const App = () => (
  <AuthenticationStatusProvider>
    <LocalizationProvider>
      <ThemeBaseline>
        <LightTheme>
          <SnackbarsProvider>
            <Router>
              <RootIndexPage path="/" />
              <AdminLoginPage path="/admin/login" />
              <AdminDashboardPage path="/admin/dashboard" />
            </Router>
          </SnackbarsProvider>
        </LightTheme>
      </ThemeBaseline>
    </LocalizationProvider>
  </AuthenticationStatusProvider>
);
