import React from "react";
import { UserAppDrawerTheme } from "theme";

import AppBar from "@material-ui/core/AppBar";
import Assignment from "@material-ui/icons/Assignment";
import Dashboard from "@material-ui/icons/Dashboard";
import Settings from "@material-ui/icons/Settings";

import { DashboardAppBar } from "components/DashboardAppBar";
import { ToolbarProfileMenu } from "components/ToolbarProfileMenu";

import { DashboardTemplateProps } from "../DashboardTemplate";
import { DrawerContentsProps } from "../DrawerContents";

import { AccountCardDetails } from "./AccountCardDetails";

interface GeneratedTemplateProps
  extends Omit<DashboardTemplateProps, "children" | "drawerContentsNode"> {
  navigationLinks: DrawerContentsProps["links"];
}

const defaultOptions = {
  showHamburgerButton: true,
};
type Options = Partial<typeof defaultOptions>;

/**
 * Generated the props to pass to the DashboardTemplate and
 * DashboardTemplateMobile components. Logic was extracted to make it easier to
 * test the DashboardTemplateMobile component in Storybook.
 */
export const generateTemplateProps = (
  options: Options = defaultOptions,
): GeneratedTemplateProps => {
  const appBarNode = (
    <AppBar color="inherit" position="static">
      <DashboardAppBar
        showHamburgerButton={options.showHamburgerButton !== false}
        logoutButtonElement={
          <ToolbarProfileMenu
            toolbarAvatarProps={{ name: "John Doe", letters: "JD" }}
          />
        }
      />
    </AppBar>
  );

  const navigationLinks: DrawerContentsProps["links"] = [
    ["userLinkDashboard", "/dashboard", <Dashboard />],
    ["userLinkExamPack", "/exam-pack", <Assignment />],
    ["userLinkMembership", "/membership", <AccountCardDetails />],
    ["userLinkSettings", "/settings", <Settings />],
  ];

  const drawerThemeElement = <UserAppDrawerTheme />;

  return {
    appBarNode,
    navigationLinks,
    drawerThemeElement,
  };
};
