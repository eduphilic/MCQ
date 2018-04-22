import strings from "l10n";
import Hidden from "material-ui/Hidden";
import IconButton from "material-ui/IconButton";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import React, { SFC } from "react";
import styled from "styled";
import { AdminDrawerStateConsumer } from "../../molecules/AdminDrawerManager";
import {
  ToolbarProfileMenu,
  ToolbarProfileMenuProps,
} from "../../molecules/ToolbarProfileMenu";

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
    <AdminDrawerStateConsumer>
      {drawerState => (
        <StyledToolbar>
          <IconButton
            className="menuButton"
            color="inherit"
            aria-label="Menu"
            onClick={drawerState.toggleDrawer}
          >
            {drawerState.icon}
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
    </AdminDrawerStateConsumer>
  );
};

const StyledToolbar = styled(Toolbar)`
  .menuButton {
    marginLeft: 12,
    marginRight: 20,
  }
`;
