import Icon from "@material-ui/core/Icon";
import React, { Component } from "react";
import styled from "styled";
import { Button, ButtonProps } from "../../atoms/Button";

export type DropdownButtonProps = ButtonProps;

export class DropdownButton extends Component<DropdownButtonProps> {
  render() {
    const { children, ...rest } = this.props;

    return (
      <Button {...rest}>
        {children}
        <PositionedDropDownArrow>arrow_drop_down</PositionedDropDownArrow>
      </Button>
    );
  }
}

const PositionedDropDownArrow = styled(Icon)`
  /* position: absolute; */
`;
