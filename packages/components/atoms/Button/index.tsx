// tslint:disable-next-line:import-name
import MuiButton, { ButtonProps as MuiButtonProps } from "material-ui/Button";
import { fade } from "material-ui/styles/colorManipulator";
import React, { SFC } from "react";
import styled from "styled";
import { Theme } from "theme";

const ButtonBase = styled(MuiButton)`
  padding: 8px 32px;

  &.color-default {
    background-color: transparent;
  }

  &.color-default:hover {
    background-color: #f3f3f3;
  }

  .label {
    font-size: 12px;
    text-transform: none;
  }

  & * {
    color: inherit;
  }

  /* Extended Colors */
  &.color-orange {
    color: #f2994a;
  }

  &.color-orange.raised {
    background-color: #fff;
  }

  &.color-orange.raised:hover {
    background-color: ${({ theme }) => getHoverBackground("#f2994a", theme)};
  }
  /* End Extended Colors */
`;

export interface ButtonProps extends Omit<MuiButtonProps, "color"> {
  /**
   * Same color options as the Material UI button with the addition of the
   * following additional colors: orange
   */
  color?: MuiButtonProps["color"] | "orange";
}

type ExtendedColor = Exclude<ButtonProps["color"], MuiButtonProps["color"]>;
const extendedColors: ExtendedColor[] = ["orange"];

/** Material UI button with default styling. */
export const Button: SFC<ButtonProps> = props => {
  const { color = "default", variant, ...rest } = props;

  const usesExtendedColor = extendedColors.includes(color as ExtendedColor);
  const classes: string[] = [];

  if (color === "default") classes.push("color-default");
  if (color === "orange") classes.push("color-orange");
  if (variant === "raised" || variant === undefined) classes.push("raised");

  return (
    <ButtonBase
      className={classes.join(" ")}
      classes={{
        label: "label",
      }}
      size="small"
      variant={variant || "raised"}
      // Material UI does not accept the extended colors, passing along default
      // in its place.
      color={usesExtendedColor ? "default" : color}
      {...rest as any}
    />
  );
};

function getHoverBackground(color: string, theme: Theme): string {
  return fade(color, (theme.palette.action as any).hoverOpacity);
}

type Diff<T extends string, U extends string> = ({ [P in T]: P } &
  { [P in U]: never } & { [x: string]: never })[T];

type Omit<T, K extends keyof T> = Pick<T, Diff<keyof T, K>>;
