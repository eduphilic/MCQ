import { Redirect, RouteComponentProps, Router } from "@reach/router";
import React, { ComponentType, ReactElement } from "react";
import Loadable from "react-loadable";
import { LoadingSpinner } from "./components/LoadingSpinner";
import { SnackbarsProvider } from "./features/display";
import { LocalizationProvider } from "./features/localization";
import {
  AuthenticationStatusProvider,
  useAuthenticationStatus,
} from "./features/session";
import { SessionUserRole } from "./models";
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
const LoadableAdminIndexManagerPage = Loadable({
  loader: () => import("./pages/AdminIndexManagerPage"),
  loading: LoadingSpinner as any,
});

const ProtectedAdminDashboardPage = createProtectedRoute(
  SessionUserRole.ADMIN,
  LoadableAdminDashboardPage,
);
const ProtectedAdminIndexManagerPage = createProtectedRoute(
  SessionUserRole.ADMIN,
  LoadableAdminIndexManagerPage,
);

export const App = () => (
  <AuthenticationStatusProvider>
    <LocalizationProvider>
      <ThemeBaseline>
        <LightTheme>
          <SnackbarsProvider>
            <Router>
              <LoadableRootIndexPage path="/" />
              <LoadableAdminLoginPage path="/admin/login" />

              <ProtectedAdminDashboardPage path="/admin/dashboard" />
              <ProtectedAdminIndexManagerPage path="/admin/index-manager" />
            </Router>
          </SnackbarsProvider>
        </LightTheme>
      </ThemeBaseline>
    </LocalizationProvider>
  </AuthenticationStatusProvider>
);

function createProtectedRoute(role: SessionUserRole, Component: ComponentType) {
  let redirect: ReactElement<any> | null = null;
  if (role === SessionUserRole.ADMIN) {
    redirect = <Redirect to="/admin/login" noThrow />;
  } else {
    redirect = <Redirect to="/login" noThrow />;
  }

  function ProtectedRoute(_props: RouteComponentProps) {
    const authenticationStatus = useAuthenticationStatus();
    if (!authenticationStatus) return redirect;
    return <Component />;
  }

  return ProtectedRoute;
}
