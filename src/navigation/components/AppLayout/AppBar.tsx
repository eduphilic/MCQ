// tslint:disable:import-name
import { drawerWidth } from "css";
import React, { SFC } from "react";
import styled from "styled";

import MuiAppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import { LogoutButton } from "./LogoutButton";

export const AppBar: SFC<{}> = () => {
  return (
    <ResponsiveWidthAppBar>
      <Toolbar>
        <FlexSpacer />
        <LogoutButton />
      </Toolbar>
    </ResponsiveWidthAppBar>
  );
};

const ResponsiveWidthAppBar = styled<{ className?: string }>(
  ({ className, children }) => (
    <MuiAppBar className={className} color="inherit">
      {children}
    </MuiAppBar>
  ),
)`
  width: 100%;
  left: 0;

  ${({ theme }) => theme.breakpoints.up("md")} {
    left: ${drawerWidth}px;
    width: calc(100% - ${drawerWidth}px);
  }
`;

const FlexSpacer = styled.div`
  flex: 1;
`;
