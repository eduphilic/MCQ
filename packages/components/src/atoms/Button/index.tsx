// tslint:disable-next-line:import-name
import MuiButton, {
  ButtonProps as MuiButtonProps,
} from "@material-ui/core/Button";
import { fade } from "@material-ui/core/styles/colorManipulator";
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

  &.color-orange.raised,
  &.color-red.raised {
    background-color: #fff;
  }

  &.color-orange.raised:hover {
    background-color: ${({ theme }) => getHoverBackground("#f2994a", theme)};
  }

  &.color-red {
    color: #910f0f;
  }

  &.color-red.raised:hover {
    background-color: ${({ theme }) => getHoverBackground("#910f0f", theme)};
  }
  /* End Extended Colors */
`;

export interface ButtonProps extends Omit<MuiButtonProps, "color"> {
  /**
   * Same color options as the Material UI button with the addition of the
   * following additional colors: orange
   */
  color?: MuiButtonProps["color"] | "orange" | "red";
}

type ExtendedColor = Exclude<ButtonProps["color"], MuiButtonProps["color"]>;
const extendedColors: ExtendedColor[] = ["orange", "red"];

/** Material UI button with default styling. */
export const Button: SFC<ButtonProps> = props => {
  const { className, color = "default", variant = "raised", ...rest } = props;

  const usesExtendedColor = extendedColors.includes(color as ExtendedColor);
  const classes: string[] = className ? [className] : [];

  if (color === "default") classes.push("color-default");
  if (color === "orange") classes.push("color-orange");
  if (color === "red") classes.push("color-red");
  if (variant === "raised") classes.push("raised");

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
