import { mixins, styled } from "@join-uniform/theme";
import React, { Fragment, ReactNode } from "react";
import { AppDrawer, AppDrawerContextProvider, drawerWidth } from "../AppDrawer";
import { ResponsiveAppBar } from "./ResponsiveAppBar";

export function DashboardLayout(props: { children?: ReactNode }) {
  if (typeof document !== "undefined") document.title = "Dashboard";

  return (
    <AppDrawerContextProvider>
      <ResponsiveAppBar
        title="Join Uniform"
        // TODO: Wire this up correctly.
        // tslint:disable-next-line:no-empty
        onDrawerToggleButtonClick={() => {}}
        // TODO: Wire this up correctly.
        // tslint:disable-next-line:no-empty
        onLogoutButtonClick={() => {}}
      />

      <AppDrawer
        // TODO: Wire this up correctly.
        theme="admin"
        // TODO: Wire this up correctly.
        links={[{ href: "/", title: "Home" }]}
        // TODO: Wire this up correctly.
        LinkComponent={Fragment}
        // TODO: Wire this up correctly.
        logoSrc="https://res.cloudinary.com/https-www-joinuniform-com/image/upload/w_48,h_48/v1543925170/logo/joinUniform.png"
      />

      <AppBarSpacer />

      <ContentWrapper>{props.children}</ContentWrapper>
    </AppDrawerContextProvider>
  );
}

const ContentWrapper = styled.main`
  padding: 16px 0;

  ${({ theme }) => theme.breakpoints.up("md")} {
    margin-left: ${drawerWidth}px;
  }
`;

const AppBarSpacer = styled.div`
  ${mixins.toolbar};
`;
