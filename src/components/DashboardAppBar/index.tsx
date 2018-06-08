import React, { cloneElement, ReactElement, SFC } from "react";
import { PageTitleStore } from "stores";
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

  /**
   * Custom element to replace default logout button element. This can be used
   * to replace the logout button with a profile dropdown control.
   */
  logoutButtonElement?: ReactElement<{ onClick?: () => any }>;
}

/**
 * App bar for both admin and user dashboards. Implements a persistent
 * navigation drawer.
 *
 * The implementation is based on the example here:
 * https://material-ui-next.com/demos/drawers/#persistent-drawer
 */
export const DashboardAppBar: SFC<DashboardAppBarProps> = props => {
  const {
    showHamburgerButton = true,
    onLogoutButtonClick,
    actionButtonElements: outerActionButtonElements,
  } = props;

  let actionButtonNodes: typeof outerActionButtonElements;
  if (outerActionButtonElements) {
    actionButtonNodes = outerActionButtonElements.map(
      (node, index) => (!node.key ? cloneElement(node, { key: index }) : node),
    );
  }

  const logoutButtonElement = props.logoutButtonElement ? (
    cloneElement(props.logoutButtonElement, {
      onClick: props.onLogoutButtonClick,
    })
  ) : (
    <LogoutButton dense onClick={onLogoutButtonClick} />
  );

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
        <PageTitleStore.Consumer>
          {({ title }) => (
            <Typography
              variant="title"
              color="inherit"
              style={{ fontWeight: 400 }}
            >
              {title}
            </Typography>
          )}
        </PageTitleStore.Consumer>
      </Hidden>
      <div style={{ flex: 1 }} />

      {actionButtonNodes}
      {logoutButtonElement}
    </StyledToolbar>
  );
};

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
