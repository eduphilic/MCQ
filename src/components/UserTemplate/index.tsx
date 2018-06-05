import React, { Component } from "react";
import { UserAppDrawerTheme } from "theme";

import AppBar from "@material-ui/core/AppBar";

import { DashboardAppBar } from "components/DashboardAppBar";
import { DashboardTemplate } from "components/DashboardTemplate";
import { DrawerContents } from "components/DrawerContents";
import { ToolbarProfileMenu } from "components/ToolbarProfileMenu";

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
          ["userLinkDashboard", "/dashboard"],
          ["userLinkExamPack", "/exam-pack"],
          ["userLinkMembership", "/membership"],
          ["userLinkSettings", "/settings"],
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
