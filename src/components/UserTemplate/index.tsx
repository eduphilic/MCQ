import React, { Component } from "react";

import withWidth, {
  isWidthDown,
  WithWidthProps,
} from "@material-ui/core/withWidth";

import { DashboardTemplate } from "components/DashboardTemplate";
import { DashboardTemplateMobile } from "components/DashboardTemplateMobile";
import { DrawerContents } from "components/DrawerContents";

import { generateTemplateProps } from "./generateTemplateProps";

// tslint:disable-next-line:no-empty-interface
export interface UserTemplateProps extends WithWidthProps {}

class UserTemplate extends Component<UserTemplateProps> {
  render() {
    const { children, width } = this.props;
    const {
      appBarNode,
      navigationLinks,
      drawerThemeElement,
    } = generateTemplateProps({ showHamburgerButton: false });

    const drawerContentsNode = <DrawerContents links={navigationLinks} />;
    const showMobileTemplate = isWidthDown("sm", width);

    return (
      <>
        {!showMobileTemplate ? (
          <DashboardTemplate
            appBarNode={appBarNode}
            drawerContentsNode={drawerContentsNode}
            drawerThemeElement={drawerThemeElement}
          >
            {children}
          </DashboardTemplate>
        ) : (
          <DashboardTemplateMobile appBarNode={appBarNode}>
            {children}
          </DashboardTemplateMobile>
        )}
      </>
    );
  }
}

const UserTemplateWithWidth = withWidth()(UserTemplate);
export { UserTemplateWithWidth as UserTemplate };
