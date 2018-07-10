import { drawerWidth, fromToolbarHeight } from "css";
import React, { SFC } from "react";
import styled from "styled";

import Drawer, { DrawerProps } from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";

import { AppBar } from "./AppBar";
import { DrawerContents, DrawerContentsProps } from "./DrawerContents";
import { NavTheme } from "./NavTheme";
import { SwipeableNav } from "./SwipeableNav";

export type AppLayoutProps = DrawerContentsProps & {
  enableSwipeNavigation: boolean;
};

export const AppLayout: SFC<AppLayoutProps> = props => {
  const { children, links, enableSwipeNavigation } = props;

  return (
    <Wrapper>
      {/* Top AppBar */}
      <AppBar />

      {/* Side navigation drawer, shown on tablet and above. */}
      <Hidden smDown>
        <NavTheme>
          <TabletDrawer>
            <DrawerContents links={links} />
          </TabletDrawer>
        </NavTheme>
      </Hidden>

      <ContentWrapper>
        {/* Bottom navigation with swipe panels, shown on mobile. */}
        <Hidden mdUp>
          {enableSwipeNavigation ? <SwipeableNav links={links} /> : children}
        </Hidden>

        {/* Tablet/desktop page contents. */}
        <Hidden smDown>{children}</Hidden>
      </ContentWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  ${fromToolbarHeight("padding-top")};

  ${({ theme }) => theme.breakpoints.up("md")} {
    padding-left: ${drawerWidth}px;
  }
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
