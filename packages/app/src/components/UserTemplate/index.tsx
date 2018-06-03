import React, { Component } from "react";

import { ResponsiveDrawerFrame } from "components/ResponsiveDrawerFrame";
import { AdminAppDrawerTheme } from "theme";

// tslint:disable-next-line:no-empty-interface
export interface UserTemplateProps {}

export class UserTemplate extends Component<UserTemplateProps> {
  render() {
    const { children } = this.props;

    const appBarNode = <div>App Bar Node</div>;
    const drawerContentsNode = <div>Drawer Contents Node</div>;
    const pageContentsNode = <div>{children}</div>;

    return (
      <ResponsiveDrawerFrame
        appBarNode={appBarNode}
        drawerContentsNode={drawerContentsNode}
        drawerThemeElement={<AdminAppDrawerTheme />}
        pageContentsNode={pageContentsNode}
      />
    );
  }
}
