import React, { Component } from "react";
import { UserAppDrawerTheme } from "theme";

import AppBar from "@material-ui/core/AppBar";
import Assignment from "@material-ui/icons/Assignment";
import Dashboard from "@material-ui/icons/Dashboard";
import Settings from "@material-ui/icons/Settings";

import { DashboardAppBar } from "components/DashboardAppBar";
import { DashboardTemplate } from "components/DashboardTemplate";
import { DrawerContents } from "components/DrawerContents";
import { ToolbarProfileMenu } from "components/ToolbarProfileMenu";

import { AccountCardDetails } from "./AccountCardDetails";

// tslint:disable-next-line:no-empty-interface
export interface UserTemplateProps {}

export class UserTemplate extends Component<UserTemplateProps> {
  render() {
    const { children } = this.props;

    const appBarNode = (
      <AppBar color="inherit" position="static">
        <DashboardAppBar
          logoutButtonElement={
            <ToolbarProfileMenu
              toolbarAvatarProps={{ name: "John Doe", letters: "JD" }}
            />
          }
        />
      </AppBar>
    );

    const drawerContentsNode = (
      <DrawerContents
        links={[
          ["userLinkDashboard", "/dashboard", <Dashboard />],
          ["userLinkExamPack", "/exam-pack", <Assignment />],
          ["userLinkMembership", "/membership", <AccountCardDetails />],
          ["userLinkSettings", "/settings", <Settings />],
        ]}
      />
    );

    return (
      <DashboardTemplate
        appBarNode={appBarNode}
        drawerContentsNode={drawerContentsNode}
        drawerThemeElement={<UserAppDrawerTheme />}
      >
        {children}
      </DashboardTemplate>
    );
  }
}
