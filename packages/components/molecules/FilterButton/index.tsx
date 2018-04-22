import FilterList from "@material-ui/icons/FilterList";
import strings from "l10n";
import Button from "material-ui/Button";
import Hidden from "material-ui/Hidden";
import Menu, { MenuItem } from "material-ui/Menu";
import React, { Component } from "react";
import styled from "styled";

export interface FilterButtonProps {
  /**
   * List of filtering options to preset the user by way of a popup menu.
   */
  options: string[];

  /**
   * The currently selected value.
   */
  value: string;

  /**
   * Called when the user's menu selection is different from the current
   * selection.
   */
  onChange: (value: string) => void;
}

interface FilterButtonState {
  anchorEl: HTMLElement | null;
}

/**
 * A filter button with popup menu.
 */
export class FilterButton extends Component<
  FilterButtonProps,
  FilterButtonState
> {
  state: FilterButtonState = {
    anchorEl: null,
  };

  handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleMenuItemClick = (value: string) => {
    if (this.props.value !== value) this.props.onChange(value);
    this.setState({ anchorEl: null });
  };

  render() {
    const { options, value } = this.props;
    const { anchorEl } = this.state;

    return (
      <>
        <Button onClick={this.handleClick}>
          <IconMarginRight />
          <Hidden xsDown implementation="css">
            {strings.adminFilterMenuCaption}
          </Hidden>
          {value}
        </Button>
        <Menu
          anchorEl={anchorEl as any}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          {options.map(o => (
            <MenuItem key={o} onClick={() => this.handleMenuItemClick(o)}>
              {o}
            </MenuItem>
          ))}
        </Menu>
      </>
    );
  }
}

const IconMarginRight = styled(FilterList)`
  margin-right: ${({ theme }) => theme.spacing.unit}px;
`;
