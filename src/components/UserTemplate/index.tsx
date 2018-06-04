import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { PageTitleStore } from "stores";
import styled from "styled";
import { UserAppDrawerTheme } from "theme";

import AppBar from "@material-ui/core/AppBar";

import { ContentCenterWrapper } from "components/ContentCenterWrapper";
import { DashboardAppBar } from "components/DashboardAppBar";
import { DrawerContents } from "components/DrawerContents";
import { ResponsiveDrawerFrame } from "components/ResponsiveDrawerFrame";
import { ToolbarProfileMenu } from "components/ToolbarProfileMenu";

// tslint:disable-next-line:no-empty-interface
export interface UserTemplateProps {}

export class UserTemplate extends Component<UserTemplateProps> {
  render() {
    const { children } = this.props;

    const appBarNode = (
      <AppBar color="inherit" position="static">
        <DashboardAppBar
          logoutButtonElement={
            <ToolbarProfileMenu
              toolbarAvatarProps={{ name: "John Doe", letters: "JD" }}
            />
          }
        />
      </AppBar>
    );

    const drawerContentsNode = (
      <DrawerContents
        links={[
          ["userLinkDashboard", "/dashboard"],
          ["userLinkExamPack", "/exam-pack"],
          ["userLinkMembership", "/membership"],
          ["userLinkSettings", "/settings"],
        ]}
      />
    );

    const pageContentsNode = (
      <ContentCenterWrapperWithVerticalMargins>
        {children}
      </ContentCenterWrapperWithVerticalMargins>
    );

    return (
      <>
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
          drawerThemeElement={<UserAppDrawerTheme />}
          pageContentsNode={pageContentsNode}
        />
      </>
    );
  }
}

const ContentCenterWrapperWithVerticalMargins = styled(ContentCenterWrapper)`
  > * {
    margin-bottom: ${({ theme }) => theme.spacing.unit * 3}px;
  }
`;
