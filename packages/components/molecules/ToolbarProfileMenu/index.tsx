import PowerSettingsNew from "@material-ui/icons/PowerSettingsNew";
import strings from "l10n";
import Button from "material-ui/Button";
import { ListItemIcon, ListItemText } from "material-ui/List";
import Menu, { MenuItem } from "material-ui/Menu";
import React, { Component, MouseEvent } from "react";
import styled from "styled";
import { ToolbarAvatar, ToolbarAvatarProps } from "../ToolbarAvatar";

export interface ToolbarProfileMenuProps {
  /**
   * Provides image and text for the avatar section.
   */
  toolbarAvatarProps: ToolbarAvatarProps;

  /**
   * Called when the logout menu item is selected.
   */
  onLogoutClick: () => void;
}

interface ToolbarProfileMenuState {
  anchorEl: HTMLElement | null;
}

/**
 * Provides a button which reveals menu options for the currently logged in
 * user. Shown on the right in the AppBar.
 */
export class ToolbarProfileMenu extends Component<
  ToolbarProfileMenuProps,
  ToolbarProfileMenuState
> {
  state = { anchorEl: null };

  handleClick = (event: MouseEvent<HTMLElement>) => {
    this.setState({ anchorEl: event.currentTarget as HTMLElement });
    event.persist();
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleItemClick = (item: string) => {
    switch (item) {
      case "logout":
        this.props.onLogoutClick();
        break;
    }
    this.handleClose();
  };

  render() {
    const { toolbarAvatarProps } = this.props;
    const { anchorEl } = this.state;

    return (
      <Wrapper>
        <Button className="button" onClick={this.handleClick}>
          <ToolbarAvatar {...toolbarAvatarProps} />
        </Button>

        <Menu
          anchorEl={anchorEl as any}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <LogoutMenuItem
            id="logout"
            onClick={() => this.handleItemClick("logout")}
          >
            <ListItemIcon className="icon">
              <PowerSettingsNew />
            </ListItemIcon>
            <ListItemText inset primary={strings.logoutButtonText} />
          </LogoutMenuItem>
        </Menu>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  .button {
    text-transform: none;
  }
`;

const LogoutMenuItem = styled(MenuItem)`
  .icon {
    fill: #910f0f;
  }
`;
