import { mixins, styled } from "@join-uniform/theme";
import React, { ReactNode } from "react";
import {
  AppDrawer,
  AppDrawerContextProvider,
  AppDrawerProps,
  drawerWidth,
} from "../AppDrawer";
import { ResponsiveAppBar, ResponsiveAppBarProps } from "./ResponsiveAppBar";

export type LayoutDashboardProps = ResponsiveAppBarProps & {
  children?: ReactNode;

  drawerTheme: AppDrawerProps["theme"];
  drawerLinks: AppDrawerProps["links"];
  drawerLogoSrc: AppDrawerProps["logoSrc"];
  DrawerLinkComponent: AppDrawerProps["LinkComponent"];
};

export function LayoutDashboard(props: LayoutDashboardProps) {
  const {
    title,
    buttons,
    onLogoutButtonClick,
    drawerTheme,
    drawerLinks,
    drawerLogoSrc,
    DrawerLinkComponent,
  } = props;

  return (
    <AppDrawerContextProvider>
      <ResponsiveAppBar
        title={title}
        buttons={buttons}
        onLogoutButtonClick={onLogoutButtonClick}
      />

      <AppDrawer
        theme={drawerTheme}
        links={drawerLinks}
        LinkComponent={DrawerLinkComponent}
        logoSrc={drawerLogoSrc}
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
