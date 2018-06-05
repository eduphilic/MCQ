import React, { SFC } from "react";

import AppBar from "@material-ui/core/AppBar";

import { AdminAppDrawerTheme } from "theme";

import {
  DashboardAppBar,
  DashboardAppBarProps,
} from "components/DashboardAppBar";
import { DashboardTemplate } from "components/DashboardTemplate";
import { DrawerContents } from "components/DrawerContents";
import {
  SideSheet,
  SideSheetProps,
  SideSheetToggleButton,
  SideSheetToggleButtonProps,
  SideSheetToggleStateProvider,
} from "components/SideSheet";

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

  const drawerContentsNode = (
    <DrawerContents
      links={[
        ["adminLinkDashboard", "/admin/dashboard"],
        ["adminLinkEntryManager", "/admin/entry-manager"],
        ["adminLinkTestManager", "/admin/test-manager"],
        ["adminLinkIndexManager", "/admin/index-manager"],
        ["adminLinkPlanManager", "/admin/plan-manager"],
        ["adminLinkQuestionManager", "/admin/question-manager"],
        ["adminLinkUserManager", "/admin/user-manager"],
        ["adminLinkRevenueManager", "/admin/revenue-manager"],
      ]}
    />
  );

  const PageContentsWrapper: SFC<{}> = ({ children: wrapperChildren }) => (
    <SideSheetToggleStateProvider>
      <SideSheet
        sideSheetTitle={sideSheetTitle}
        sideSheetContents={sideSheetContents}
      >
        {wrapperChildren}
      </SideSheet>
    </SideSheetToggleStateProvider>
  );

  return (
    <DashboardTemplate
      appBarNode={appBarNode}
      drawerContentsNode={drawerContentsNode}
      drawerThemeElement={<AdminAppDrawerTheme />}
      pageContentsWrapperComponent={PageContentsWrapper}
    >
      {children}
    </DashboardTemplate>
  );
};
