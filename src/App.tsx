import { Router } from "@reach/router";
import React from "react";
import Loadable from "react-loadable";
import { LoadingSpinner } from "./components/LoadingSpinner";
import { SnackbarsProvider } from "./features/display";
import { LocalizationProvider } from "./features/localization";
import { AuthenticationStatusProvider } from "./features/session";
import { LightTheme, ThemeBaseline } from "./styled";

const LoadableRootIndexPage = Loadable({
  loader: () => import("./pages/RootIndexPage"),
  loading: LoadingSpinner as any,
});

const LoadableAdminLoginPage = Loadable({
  loader: () => import("./pages/AdminLoginPage"),
  loading: LoadingSpinner as any,
});

const LoadableAdminDashboardPage = Loadable({
  loader: () => import("./pages/AdminDashboardPage"),
  loading: LoadingSpinner as any,
});

export const App = () => (
  <AuthenticationStatusProvider>
    <LocalizationProvider>
      <ThemeBaseline>
        <LightTheme>
          <SnackbarsProvider>
            <Router>
              <LoadableRootIndexPage path="/" />
              <LoadableAdminLoginPage path="/admin/login" />
              <LoadableAdminDashboardPage path="/admin/dashboard" />
            </Router>
          </SnackbarsProvider>
        </LightTheme>
      </ThemeBaseline>
    </LocalizationProvider>
  </AuthenticationStatusProvider>
);
