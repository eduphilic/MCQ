import React from "react";
import { withRouter } from "react-router-dom";
import { routePathFromLocalizationKey } from "routes";
import styled from "styled";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

const dashboardRoutes = [
  routePathFromLocalizationKey("routes_Dashboard_MembershipEntriesPage"),
  routePathFromLocalizationKey("routes_Dashboard_MembershipSubscriptionPage"),
];

export const BottomToolbar = withRouter(props => {
  const useDashboardBackgroundColor = dashboardRoutes.includes(
    props.location.pathname,
  );

  return (
    <StyledAppBar
      position="static"
      color="default"
      className={
        useDashboardBackgroundColor ? "dashboard-background-color" : ""
      }
    >
      <Toolbar>
        <ToolbarContentsWrapper>{props.children}</ToolbarContentsWrapper>
      </Toolbar>
    </StyledAppBar>
  );
});

const StyledAppBar = styled(AppBar)`
  ${({ theme }) => theme.breakpoints.down("sm")} {
    &.dashboard-background-color {
      background-color: #03285b !important;
    }
  }
`;

const ToolbarContentsWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1232px;
  height: 100%;
  margin: 0 auto;
  align-items: center;
`;
