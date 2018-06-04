import React, { Component } from "react";

import AppBar from "@material-ui/core/AppBar";

import { ResponsiveDrawerFrame } from "components/ResponsiveDrawerFrame";
import { UserAppDrawerTheme } from "theme";

// tslint:disable-next-line:no-empty-interface
export interface UserTemplateProps {}

export class UserTemplate extends Component<UserTemplateProps> {
  render() {
    const { children } = this.props;

    const drawerContentsNode = <div>Drawer Contents Node</div>;
    const pageContentsNode = <div>{children}</div>;

    const appBarNode = (
      <AppBar color="inherit" position="static">
        <div>appbar</div>
      </AppBar>
    );

    return (
      <ResponsiveDrawerFrame
        appBarNode={appBarNode}
        drawerContentsNode={drawerContentsNode}
        drawerThemeElement={<UserAppDrawerTheme />}
        pageContentsNode={pageContentsNode}
      />
    );
  }
}
