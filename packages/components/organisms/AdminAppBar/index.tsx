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

// tslint:disable-next-line:no-empty-interface
export interface AdminAppBarProps extends ToolbarProfileMenuProps {}

/**
 * App bar for admin dashboard.
 */
export const AdminAppBar: SFC<AdminAppBarProps> = props => {
  return (
    <StyledToolbar>
      <Hidden mdUp implementation="css">
        <IconButton className="menuButton" color="inherit" aria-label="Menu">
          <Menu />
        </IconButton>
      </Hidden>

      <Hidden xsDown implementation="css">
        <Typography variant="title" color="inherit">
          {strings.adminDashboardAppBarTitle}
        </Typography>
      </Hidden>
      <div style={{ flex: 1 }} />

      <ToolbarProfileMenu {...props} />
    </StyledToolbar>
  );
};

const StyledToolbar = styled(Toolbar)`
  .menuButton {
    marginLeft: -12,
    marginRight: 20,
  }
`;
