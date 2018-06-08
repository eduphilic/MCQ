import React, { Component } from "react";

import { DashboardTemplate } from "components/DashboardTemplate";
import { DrawerContents } from "components/DrawerContents";

import { generateTemplateProps } from "./generateTemplateProps";

// tslint:disable-next-line:no-empty-interface
export interface UserTemplateProps {}

export class UserTemplate extends Component<UserTemplateProps> {
  render() {
    const { children } = this.props;
    const {
      appBarNode,
      navigationLinks,
      drawerThemeElement,
    } = generateTemplateProps();

    const drawerContentsNode = <DrawerContents links={navigationLinks} />;

    return (
      <DashboardTemplate
        appBarNode={appBarNode}
        drawerContentsNode={drawerContentsNode}
        drawerThemeElement={drawerThemeElement}
      >
        {children}
      </DashboardTemplate>
    );
  }
}
