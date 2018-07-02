import React from "react";
import { UserAppDrawerTheme } from "theme";

import AppBar from "@material-ui/core/AppBar";

import { DashboardAppBar } from "../DashboardAppBar";
import { DashboardTemplateProps } from "../DashboardTemplate";

interface GeneratedTemplateProps
  extends Omit<DashboardTemplateProps, "children" | "drawerContentsNode"> {}

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
        showAppTitleOnMobile
      />
    </AppBar>
  );

  const drawerThemeElement = <UserAppDrawerTheme />;

  return {
    appBarNode,
    drawerThemeElement,
  };
};
