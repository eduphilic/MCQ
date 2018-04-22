import Menu from "@material-ui/icons/Menu";
import strings from "l10n";
import Hidden from "material-ui/Hidden";
import IconButton from "material-ui/IconButton";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import React, { SFC } from "react";
import styled from "styled";
import {
  ToolbarProfileMenu,
  ToolbarProfileMenuProps,
} from "../../molecules/ToolbarProfileMenu";
import { DrawerStateConsumer } from "../../organisms/ResponsiveDrawerFrame";

// tslint:disable-next-line:no-empty-interface
export interface AdminAppBarProps extends ToolbarProfileMenuProps {}

/**
 * App bar for admin dashboard. Implements a persistent navigation drawer.
 *
 * The implementation is based on the example here:
 * https://material-ui-next.com/demos/drawers/#persistent-drawer
 */
export const AdminAppBar: SFC<AdminAppBarProps> = props => {
  return (
    <DrawerStateConsumer>
      {drawerState => (
        <StyledToolbar>
          <IconButton
            className="menu-button"
            color="inherit"
            aria-label="Menu"
            onClick={drawerState.toggleDrawer}
          >
            <Menu />
          </IconButton>

          <Hidden smDown implementation="css">
            <Typography variant="title" color="inherit">
              {strings.adminDashboardAppBarTitle}
            </Typography>
          </Hidden>
          <div style={{ flex: 1 }} />

          <ToolbarProfileMenu {...props} />
        </StyledToolbar>
      )}
    </DrawerStateConsumer>
  );
};

const StyledToolbar = styled(Toolbar)`
  .menu-button {
    marginLeft: 12,
    marginRight: 20,
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    .menu-button {
      display: none;
    }
  }
`;
