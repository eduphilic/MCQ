import React, { SFC } from "react";
import { Helmet } from "react-helmet";
import styled from "styled";

import AppBar from "@material-ui/core/AppBar";

import { AdminAppDrawerTheme } from "theme";

import { AdminAppBar, AdminAppBarProps } from "components/AdminAppBar";
import { AdminDrawerContents } from "components/AdminDrawerContents";
import { ContentCenterWrapper } from "components/ContentCenterWrapper";
import { ResponsiveDrawerFrame } from "components/ResponsiveDrawerFrame";
import {
  SideSheet,
  SideSheetProps,
  SideSheetToggleButton,
  SideSheetToggleButtonProps,
  SideSheetToggleStateProvider,
} from "components/SideSheet";
import { PageTitleConsumer } from "../PageTitleConsumer";

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
      <PageTitleConsumer>
        {({ title }) => (
          <Helmet>
            <title>{title} - JoinUniform</title>
          </Helmet>
        )}
      </PageTitleConsumer>
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