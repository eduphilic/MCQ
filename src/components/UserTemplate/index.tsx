import React, { Component } from "react";
import styled from "styled";

import AppBar from "@material-ui/core/AppBar";

import { ContentCenterWrapper } from "components/ContentCenterWrapper";
import { DashboardAppBar } from "components/DashboardAppBar";
import { ResponsiveDrawerFrame } from "components/ResponsiveDrawerFrame";
import { ToolbarProfileMenu } from "components/ToolbarProfileMenu";
import { Helmet } from "react-helmet";
import { PageTitleStore } from "stores";
import { UserAppDrawerTheme } from "theme";

// tslint:disable-next-line:no-empty-interface
export interface UserTemplateProps {}

export class UserTemplate extends Component<UserTemplateProps> {
  render() {
    const { children } = this.props;

    const drawerContentsNode = <div>Drawer Contents Node</div>;

    const pageContentsNode = (
      <ContentCenterWrapperWithVerticalMargins>
        {children}
      </ContentCenterWrapperWithVerticalMargins>
    );

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
