import { drawerWidth } from "css";
import React, { SFC } from "react";
import styled from "styled";

import Drawer, { DrawerProps } from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";

import { NavTheme } from "./NavTheme";

export type AppLayoutProps = {};

export const AppLayout: SFC<AppLayoutProps> = () => {
  return (
    <Wrapper>
      {/* Side navigation drawer, shown on tablet and above. */}
      <Hidden smDown>
        <NavTheme>
          <TabletDrawer>
            <div>placeholder</div>
          </TabletDrawer>
        </NavTheme>
      </Hidden>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const TabletDrawer = styled<DrawerProps>(props => (
  <Drawer
    variant="permanent"
    open
    classes={{
      paper: "drawer-paper",
    }}
    {...props}
  />
))`
  .drawer-paper {
    width: ${drawerWidth}px;
    background-color: ${({ theme }) => theme.palette.background.default};
  }
`;
