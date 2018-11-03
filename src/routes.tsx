import { Redirect, RouteComponentProps } from "@reach/router";
import React, { ComponentType, ReactElement } from "react";
import Loadable from "react-loadable";
import { useAuthenticationStatus } from "./features/session";
import { SessionUserRole } from "./models";

type RouteConfiguration = {
  pageFileName: string;
  routerPath: string;
  requiredUserRole?: SessionUserRole;
};

const routeConfigurations: RouteConfiguration[] = [
  {
    pageFileName: "RootIndexPage",
    routerPath: "/",
  },
  {
    pageFileName: "AdminLoginPage",
    routerPath: "/admin/login",
  },
  {
    pageFileName: "AdminDashboardPage",
    routerPath: "/admin/dashboard",
    requiredUserRole: SessionUserRole.ADMIN,
  },
  {
    pageFileName: "AdminIndexManagerPage",
    routerPath: "/admin/index-manager",
    requiredUserRole: SessionUserRole.ADMIN,
  },
];

export const routes = routeConfigurations.map(route => {
  let RouteComponent: ComponentType<RouteComponentProps> = Loadable<
    RouteComponentProps,
    {}
  >({
    loader: () => import(`./pages/${route.pageFileName}`),
    loading: () => <p>Loading...</p>,
    modules: [`./${route.pageFileName}`],
    webpack: (() => [
      require.resolveWeak(`./pages/${route.pageFileName}`),
    ]) as any,
  });

  if (route.requiredUserRole) {
    RouteComponent = createProtectedRoute(
      route.requiredUserRole,
      RouteComponent,
    );
  }

  return <RouteComponent key={route.routerPath} path={route.routerPath} />;
});

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
