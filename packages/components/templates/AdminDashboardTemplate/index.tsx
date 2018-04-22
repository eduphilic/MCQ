import { ContentCenterWrapper } from "components/atoms/ContentCenterWrapper";
import AppBar from "material-ui/AppBar";
import React, { SFC } from "react";
import styled from "styled";
import {
  AdminDrawerStateConsumer,
  AdminDrawerStateProvider,
} from "../../molecules/AdminDrawerManager";
import { AdminAppBar, AdminAppBarProps } from "../../organisms/AdminAppBar";
import { AdminDrawer } from "../../organisms/AdminDrawer";
import { drawerWidth } from "../../organisms/ResponsiveDrawerFrame";

export interface AdminDashboardTemplateProps {
  adminAppBarProps: AdminAppBarProps;
}

export const AdminDashboardTemplate: SFC<
  AdminDashboardTemplateProps
> = props => {
  const { adminAppBarProps, children } = props;

  return (
    <AdminDrawerStateProvider>
      <AdminDrawerStateConsumer>
        {drawerState => (
          <Wrapper>
            <AppBar
              className={`appBar${drawerState.open ? " appBarShift" : ""}`}
              color="inherit"
            >
              <AdminAppBar {...adminAppBarProps} />
            </AppBar>

            <AdminDrawer />

            <main
              className={`content${drawerState.open ? " contentShift" : ""}`}
            >
              <ContentSpacer />

              <ContentCenterWrapper>{children}</ContentCenterWrapper>
            </main>
          </Wrapper>
        )}
      </AdminDrawerStateConsumer>
    </AdminDrawerStateProvider>
  );
};

const Wrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  overflow: hidden;

  .appBar {
    position: absolute;
    transition: ${({ theme }) =>
      theme.transitions.create(["margin", "width"], {
        duration: theme.transitions.duration.leavingScreen,
        easing: theme.transitions.easing.sharp,
      })};
  }

  .appBarShift {
    width: calc(100% - ${drawerWidth}px);
    margin-left: ${drawerWidth}px;
    transition: ${({ theme }) =>
      theme.transitions.create(["margin", "width"], {
        duration: theme.transitions.duration.enteringScreen,
        easing: theme.transitions.easing.easeOut,
      })};
  }

  .content {
    flex-grow: 1;
    ${({ theme }) => `
      padding: ${theme.spacing.unit * 3}px;
      margin-left: ${-drawerWidth}px;
      background-color: ${theme.palette.background.default};
      transition: ${theme.transitions.create("margin", {
        duration: theme.transitions.duration.leavingScreen,
        easing: theme.transitions.easing.sharp,
      })};
    `};
  }

  .contentShift {
    margin-left: 0;
    transition: ${({ theme }) =>
      theme.transitions.create("margin", {
        duration: theme.transitions.duration.enteringScreen,
        easing: theme.transitions.easing.easeOut,
      })};
  }
`;

const ContentSpacer = styled.div`
  ${({ theme }) => `
    min-height: 56px;

    ${theme.breakpoints.up("xs")} {
      min-height: 48px;
    }

    ${theme.breakpoints.up("sm")} {
      min-height: 64px;
    }
  `};
`;
