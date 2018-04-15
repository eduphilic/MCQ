// tslint:disable-next-line:import-name
import MuiButton, { ButtonProps } from "material-ui/Button";
import React, { SFC } from "react";
import styled from "styled";

const ButtonBase = styled(MuiButton)`
  height: 30px;
  padding: 8px 32px;
  background-color: transparent;

  &:hover {
    background-color: #f3f3f3;
  }

  .label {
    font-size: 12px;
    text-transform: none;
  }
`;

/** Material UI button with default styling. */
export const Button: SFC<ButtonProps> = props => (
  <ButtonBase
    classes={{
      label: "label",
    }}
    size="small"
    variant="raised"
    {...props as any}
  />
);
