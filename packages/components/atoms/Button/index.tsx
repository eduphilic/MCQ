// tslint:disable-next-line:import-name
import MuiButton, { ButtonProps as MuiButtonProps } from "material-ui/Button";
import React, { SFC } from "react";
import styled from "styled";

const ButtonBase = styled(MuiButton)`
  padding: 8px 32px;

  &.default-color {
    background-color: transparent;
  }

  &.default-color:hover {
    background-color: #f3f3f3;
  }

  .label {
    font-size: 12px;
    text-transform: none;
  }

  & * {
    color: inherit;
  }
`;

export type ButtonProps = MuiButtonProps;

/** Material UI button with default styling. */
export const Button: SFC<ButtonProps> = props => {
  const { color = "default" } = props;

  return (
    <ButtonBase
      className={color === "default" ? "default-color" : undefined}
      classes={{
        label: "label",
      }}
      size="small"
      variant="raised"
      {...props as any}
    />
  );
};
