import React, { SFC } from "react";
import { AdminAppDrawerTheme } from "theme";

import AppBar from "@material-ui/core/AppBar";

import {
  DashboardAppBar,
  DashboardAppBarProps,
} from "components/DashboardAppBar";
import { DashboardTemplate } from "components/DashboardTemplate";
import {
  SideSheet,
  SideSheetProps,
  SideSheetToggleButton,
  SideSheetToggleButtonProps,
  SideSheetToggleStoreProvider,
} from "components/SideSheet";
import { DrawerContents } from "navigation";

import { navigationLinksAdmin } from "common/structures/navigationLinksAdmin";

export interface AdminDashboardTemplateProps
  extends SideSheetProps,
    SideSheetToggleButtonProps {
  dashboardAppBarProps: DashboardAppBarProps;
}

/**
 * Admin dashboard template. Adds admin app bar and admin drawer.
 */
export const AdminDashboardTemplate: SFC<
  AdminDashboardTemplateProps
> = props => {
  const {
    dashboardAppBarProps,
    children,
    sideSheetTitle,
    sideSheetContents,
    sideSheetIconElement,
    sideSheetIconTooltipTitle,
  } = props;

  // Inject side sheet toggle button into app bar action buttons.
  const adminAppBarPropsWithSideSheetToggleButton: DashboardAppBarProps = {
    ...dashboardAppBarProps,
    actionButtonElements: dashboardAppBarProps.actionButtonElements || [],
  };
  adminAppBarPropsWithSideSheetToggleButton.actionButtonElements = [
    ...adminAppBarPropsWithSideSheetToggleButton.actionButtonElements!,
    <SideSheetToggleButton
      sideSheetIconElement={sideSheetIconElement}
      sideSheetIconTooltipTitle={sideSheetIconTooltipTitle}
    />,
  ];

  const appBarNode = (
    <AppBar color="inherit" position="static">
      <DashboardAppBar {...adminAppBarPropsWithSideSheetToggleButton} />
    </AppBar>
  );

  const drawerContentsNode = <DrawerContents links={navigationLinksAdmin} />;

  const PageContentsWrapper: SFC<{}> = ({ children: wrapperChildren }) => (
    <SideSheet
      sideSheetTitle={sideSheetTitle}
      sideSheetContents={sideSheetContents}
    >
      {wrapperChildren}
    </SideSheet>
  );

  return (
    <SideSheetToggleStoreProvider>
      <DashboardTemplate
        appBarNode={appBarNode}
        drawerContentsNode={drawerContentsNode}
        drawerThemeElement={<AdminAppDrawerTheme />}
        pageContentsWrapperComponent={PageContentsWrapper}
      >
        {children}
      </DashboardTemplate>
    </SideSheetToggleStoreProvider>
  );
};
