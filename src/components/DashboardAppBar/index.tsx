import { getPageTitleFromLocation } from "navigation";
import React, { cloneElement, ReactElement, SFC } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import styled from "styled";

import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Menu from "@material-ui/icons/Menu";

import { LogoutButton, LogoutButtonProps } from "components/LogoutButton";
import { DrawerStateConsumer } from "components/ResponsiveDrawerFrame";

export interface DashboardAppBarProps {
  /**
   * Whether to show hamburger button.
   *
   * @default true
   */
  showHamburgerButton?: boolean;

  /**
   * Called when logout button is clicked.
   */
  onLogoutButtonClick?: LogoutButtonProps["onClick"];

  /**
   * Additional buttons to place to the left of the logout button.
   */
  actionButtonElements?: ReactElement<any>[];
}

/**
 * App bar for both admin and user dashboards. Implements a persistent
 * navigation drawer.
 *
 * The implementation is based on the example here:
 * https://material-ui-next.com/demos/drawers/#persistent-drawer
 */
const DashboardAppBar: SFC<
  DashboardAppBarProps & RouteComponentProps<{}>
> = props => {
  const {
    showHamburgerButton = true,
    onLogoutButtonClick,
    actionButtonElements: outerActionButtonElements,
    location,
  } = props;

  const title = getPageTitleFromLocation(location.pathname, {
    withoutProductName: true,
  });

  let actionButtonNodes: typeof outerActionButtonElements;
  if (outerActionButtonElements) {
    actionButtonNodes = outerActionButtonElements.map(
      (node, index) => (!node.key ? cloneElement(node, { key: index }) : node),
    );
  }

  return (
    <StyledToolbar>
      {showHamburgerButton && (
        <DrawerStateConsumer>
          {drawerState => (
            <IconButton
              className="menu-button"
              color="inherit"
              aria-label="Menu"
              onClick={drawerState.toggleDrawer}
            >
              <Menu />
            </IconButton>
          )}
        </DrawerStateConsumer>
      )}

      <Hidden smDown implementation="css">
        <Typography variant="title" color="inherit" style={{ fontWeight: 400 }}>
          {title}
        </Typography>
      </Hidden>
      <div style={{ flex: 1 }} />

      {actionButtonNodes}

      <LogoutButton dense onClick={onLogoutButtonClick} />
    </StyledToolbar>
  );
};

const DashboardAppBarWithRouter = withRouter(DashboardAppBar);
export { DashboardAppBarWithRouter as DashboardAppBar };

const StyledToolbar = styled(Toolbar)`
  .menu-button {
    margin-left: -12px;
    margin-right: 20px;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    .menu-button {
      display: none;
    }
  }
`;
