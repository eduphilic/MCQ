// tslint:disable-next-line:import-name
import MuiButton, {
  ButtonProps as MuiButtonProps,
} from "@material-ui/core/Button";
import { fade } from "@material-ui/core/styles/colorManipulator";
import React from "react";
import styled, { css } from "styled";
import { styleTable } from "../Typography";

const createCustomColorCss = (colorName: string, color: string) => css`
  &.color-${colorName} {
    color: ${color};
  }

  /* Styles applied to the root element if variant="text". */
  &.variant-text.color-${colorName} {
    &:hover {
      background-color: ${({ theme }) =>
        fade(color, theme.palette.action.hoverOpacity)};

      /* Reset on touch devices, it doesn't add specificity */
      @media (hover: none) {
        background-color: transparent;
      }
    }
  }

  /* Styles applied to the root element if variant="outlined" */
  &.variant-outlined.color-${colorName} {
    border: 1px solid ${fade(color, 0.5)};
    &:hover {
      border: 1px solid ${color};
    }
  }
`;

const buttonColors = {
  primary: createCustomColorCss("primary", "#2f8d2b"),
  orange: createCustomColorCss("orange", "#f2994a"),
  red: createCustomColorCss("red", "#910f0f"),
  blue: createCustomColorCss("blue", "#2d9cdb"),
  yellow: createCustomColorCss("yellow", "#ecd100"),
  lightGreen: createCustomColorCss("lightGreen", "#4fef48"),
};

export const colors: NonNullable<ButtonProps["color"]>[] = [
  "default",
  "inherit",
  ...(Object.keys(buttonColors) as NonNullable<ButtonProps["color"]>[]),
];

const buttonColorsCss = Object.values(buttonColors).reduce(
  (accumulator, color) => {
    return [...accumulator, ...color];
  },
  [],
);

const [typeface, font, size, casing, spacing] = styleTable.Button;
if (casing) {
  //
}

const typographyCss = css`
  font-family: ${typeface};
  font-weight: ${font};
  font-size: ${size / 16}rem;
  letter-spacing: ${spacing / size}rem;
  text-transform: none;
`;

export type ButtonProps = Omit<MuiButtonProps, "color" | "variant"> & {
  color?: keyof typeof buttonColors | "default" | "inherit";
  variant?: "text" | "outlined" | "contained" | "fab" | "extendedFab";
};

export const Button = styled<ButtonProps>(props => {
  const { className, color = "default", variant = "text", ...rest } = props;

  const classes: string[] = [];
  if (className) classes.push(className);
  classes.push(`variant-${variant}`);

  if (color !== "default" && color !== "inherit") {
    classes.push(`color-${color}`);
  }

  return (
    <MuiButton
      className={classes.join(" ")}
      color={color === "inherit" ? "inherit" : "default"}
      variant={variant}
      {...rest}
    />
  );
})`
  ${typographyCss};
  ${buttonColorsCss};
`;
