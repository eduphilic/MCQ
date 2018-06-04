import React, { SFC } from "react";
import { Helmet } from "react-helmet";
import styled from "styled";

import AppBar from "@material-ui/core/AppBar";

import { AdminAppDrawerTheme } from "theme";

import { AdminDrawerContents } from "components/AdminDrawerContents";
import { ContentCenterWrapper } from "components/ContentCenterWrapper";
import {
  DashboardAppBar,
  DashboardAppBarProps,
} from "components/DashboardAppBar";
import { ResponsiveDrawerFrame } from "components/ResponsiveDrawerFrame";
import {
  SideSheet,
  SideSheetProps,
  SideSheetToggleButton,
  SideSheetToggleButtonProps,
  SideSheetToggleStateProvider,
} from "components/SideSheet";
import { PageTitleStore } from "stores";

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

  const drawerContentsNode = <AdminDrawerContents />;

  const pageContentsNode = (
    <SideSheet
      sideSheetTitle={sideSheetTitle}
      sideSheetContents={sideSheetContents}
    >
      <ContentCenterWrapperWithVerticalMargins>
        {children}
      </ContentCenterWrapperWithVerticalMargins>
    </SideSheet>
  );

  return (
    <SideSheetToggleStateProvider>
      <PageTitleStore.Consumer>
        {({ title }) => (
          <Helmet>
            <title>{title} - JoinUniform</title>
          </Helmet>
        )}
      </PageTitleStore.Consumer>
      <ResponsiveDrawerFrame
        appBarNode={appBarNode}
        drawerContentsNode={drawerContentsNode}
        drawerThemeElement={<AdminAppDrawerTheme />}
        pageContentsNode={pageContentsNode}
      />
    </SideSheetToggleStateProvider>
  );
};

const ContentCenterWrapperWithVerticalMargins = styled(ContentCenterWrapper)`
  > * {
    margin-bottom: ${({ theme }) => theme.spacing.unit * 3}px;
  }
`;
