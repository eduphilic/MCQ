import { drawerWidth } from "css";
import React, { SFC } from "react";
import styled from "styled";

import Drawer, { DrawerProps } from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";

import { DrawerContents, DrawerContentsProps } from "./DrawerContents";
import { NavTheme } from "./NavTheme";

export type AppLayoutProps = DrawerContentsProps;

export const AppLayout: SFC<AppLayoutProps> = props => {
  const { links } = props;

  return (
    <Wrapper>
      {/* Side navigation drawer, shown on tablet and above. */}
      <Hidden smDown>
        <NavTheme>
          <TabletDrawer>
            <DrawerContents links={links} />
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
