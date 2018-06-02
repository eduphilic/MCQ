import React, { Component } from "react";

import { AdminAppDrawerTheme } from "theme";
import { ResponsiveDrawerFrame } from "../../organisms/ResponsiveDrawerFrame";

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
