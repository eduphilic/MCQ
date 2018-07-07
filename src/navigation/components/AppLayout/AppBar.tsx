// tslint:disable:import-name
import { drawerWidth } from "css";
import React, { SFC } from "react";
import styled from "styled";

import MuiAppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

export const AppBar: SFC<{}> = () => {
  return (
    <ResponsiveWidthAppBar>
      <Toolbar>
        <div>Placeholder</div>
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
