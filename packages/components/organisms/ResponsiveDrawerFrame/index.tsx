import Drawer from "material-ui/Drawer";
import Hidden from "material-ui/Hidden";
import React, { cloneElement, ReactElement, ReactNode, SFC } from "react";
import styled, { css } from "styled";
import {
  DrawerProps,
  DrawerStateConsumer,
  DrawerStateProvider,
} from "./DrawerState";

export { DrawerStateConsumer };

export interface ResponsiveDrawerFrameProps extends DrawerProps {
  /**
   * AppBar node.
   */
  appBarNode: ReactNode;

  /**
   * Page contents node.
   */
  pageContentsNode: ReactNode;

  /**
   * Drawer contents node.
   */
  drawerContentsNode: ReactNode;

  /**
   * Optional theme element to wrap drawer content in.
   */
  drawerThemeElement?: ReactElement<any>;
}

/**
 * Provides a container with spacing for an app drawer, app bar, and page
 * contents. Drawer is toggleable on mobile and persistent on tablet/desktop.
 */
export const ResponsiveDrawerFrame: SFC<ResponsiveDrawerFrameProps> = props => {
  const {
    appBarNode,
    pageContentsNode,
    mobileOpen,
    drawerContentsNode,
    drawerThemeElement,
  } = props;

  const withTheme = (node: ReactNode) =>
    drawerThemeElement ? cloneElement(drawerThemeElement, {}, node) : node;

  return (
    <DrawerStateProvider mobileOpen={mobileOpen}>
      <DrawerStateConsumer>
        {drawerState => (
          <Wrapper className={drawerState.mobileOpen ? "mobile-open" : ""}>
            <AppBarContainer>{appBarNode}</AppBarContainer>

            {/* Mobile Drawer */}
            <Hidden mdUp>
              {withTheme(
                <StyledDrawer
                  variant="temporary"
                  anchor="left"
                  open={drawerState.mobileOpen}
                  onClose={drawerState.toggleDrawer}
                  classes={{ paper: "drawer-paper" }}
                  ModalProps={{ keepMounted: true }}
                >
                  {drawerContentsNode}
                </StyledDrawer>,
              )}
            </Hidden>

            {/* Tablet/Desktop Drawer */}
            <Hidden smDown implementation="css">
              {withTheme(
                <StyledDrawer
                  variant="permanent"
                  open
                  classes={{ paper: "drawer-paper" }}
                >
                  {drawerContentsNode}
                </StyledDrawer>,
              )}
            </Hidden>

            <PageContentsContainer>
              <PageContentsAppBarSpacer />

              {pageContentsNode}
            </PageContentsContainer>
          </Wrapper>
        )}
      </DrawerStateConsumer>
    </DrawerStateProvider>
  );
};

export const drawerWidth = 240;

export const toolBarHeight = css`
  height: 56px;

  ${({ theme }) => theme.breakpoints.up("xs")} {
    height: 48px;
  }

  ${({ theme }) => theme.breakpoints.up("sm")} {
    height: 64px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const AppBarContainer = styled.div`
  position: fixed;
  width: 100%;
  ${toolBarHeight};
  z-index: ${({ theme }) => theme.zIndex.appBar};

  ${({ theme }) => theme.breakpoints.up("md")} {
    width: calc(100% - ${drawerWidth}px);
    left: ${drawerWidth}px;
  }
`;

const StyledDrawer = styled(Drawer)`
  .drawer-paper {
    width: ${drawerWidth}px;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    .drawer-paper {
      position: fixed;
    }
  }
`;

const PageContentsContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.unit * 3}px;

  ${({ theme }) => theme.breakpoints.up("md")} {
    margin-left: ${drawerWidth}px;
  }
`;

const PageContentsAppBarSpacer = styled.div`
  ${toolBarHeight};
`;
