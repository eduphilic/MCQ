import AppBar from "material-ui/AppBar";
import React, { SFC } from "react";
import { Helmet } from "react-helmet";
import styled from "styled";
import { AdminAppDrawerTheme } from "theme";
import { ContentCenterWrapper } from "../../../../node_modules/components/atoms/ContentCenterWrapper";
import { AdminAppBar, AdminAppBarProps } from "../../organisms/AdminAppBar";
import { AdminDrawerContents } from "../../organisms/AdminDrawerContents";
import { ResponsiveDrawerFrame } from "../../organisms/ResponsiveDrawerFrame";

export interface AdminDashboardTemplateProps {
  adminAppBarProps: AdminAppBarProps;
}

/**
 * Admin dashboard template. Adds admin app bar and admin drawer.
 */
export const AdminDashboardTemplate: SFC<
  AdminDashboardTemplateProps
> = props => {
  const { adminAppBarProps, children } = props;

  const appBarNode = (
    <AppBar color="inherit" position="static">
      <AdminAppBar {...adminAppBarProps} />
    </AppBar>
  );

  const drawerContentsNode = <AdminDrawerContents />;

  const pageContentsNode = (
    <ContentCenterWrapperWithVerticalMargins>
      {children}
    </ContentCenterWrapperWithVerticalMargins>
  );

  return (
    <>
      <Helmet>
        <title>{adminAppBarProps.titleText} - JoinUniform</title>
      </Helmet>
      <ResponsiveDrawerFrame
        appBarNode={appBarNode}
        drawerContentsNode={drawerContentsNode}
        drawerThemeElement={<AdminAppDrawerTheme />}
        pageContentsNode={pageContentsNode}
      />
    </>
  );
};

const ContentCenterWrapperWithVerticalMargins = styled(ContentCenterWrapper)`
  > * {
    margin-bottom: ${({ theme }) => theme.spacing.unit * 3}px;
  }
`;
