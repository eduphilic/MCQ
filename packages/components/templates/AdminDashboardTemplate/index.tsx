import React, { SFC } from "react";
import { Helmet } from "react-helmet";
import styled from "styled";

import AppBar from "material-ui/AppBar";

import { AdminAppDrawerTheme } from "theme";

import { ContentCenterWrapper } from "../../atoms/ContentCenterWrapper";
import { AdminAppBar, AdminAppBarProps } from "../../organisms/AdminAppBar";
import { AdminDrawerContents } from "../../organisms/AdminDrawerContents";
import { ResponsiveDrawerFrame } from "../../organisms/ResponsiveDrawerFrame";
import {
  SideSheet,
  SideSheetProps,
  SideSheetToggleButton,
  SideSheetToggleButtonProps,
  SideSheetToggleStateProvider,
} from "../../organisms/SideSheet";

export interface AdminDashboardTemplateProps
  extends SideSheetProps,
    SideSheetToggleButtonProps {
  adminAppBarProps: AdminAppBarProps;
}

/**
 * Admin dashboard template. Adds admin app bar and admin drawer.
 */
export const AdminDashboardTemplate: SFC<
  AdminDashboardTemplateProps
> = props => {
  const {
    adminAppBarProps,
    children,
    sideSheetTitle,
    sideSheetContents,
    sideSheetIconElement,
    sideSheetIconTooltipTitle,
  } = props;

  // Inject side sheet toggle button into app bar action buttons.
  const adminAppBarPropsWithSideSheetToggleButton: AdminAppBarProps = {
    ...adminAppBarProps,
    actionButtonElements: adminAppBarProps.actionButtonElements || [],
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
      <AdminAppBar {...adminAppBarPropsWithSideSheetToggleButton} />
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
      <Helmet>
        <title>{adminAppBarProps.titleText} - JoinUniform</title>
      </Helmet>
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
