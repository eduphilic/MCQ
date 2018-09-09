// tslint:disable-next-line:import-name
import MuiButton, {
  ButtonProps as MuiButtonProps,
} from "@material-ui/core/Button";
import { fade } from "@material-ui/core/styles/colorManipulator";
import React from "react";
import styled, { css } from "styled";
import { styleTable } from "../Typography";

const createCustomColorCss = (className: string, color: string) => css`
  /* Styles applied to the root element if variant="text". */
  &.variant-text.color-${className} {
    color: ${color};
    &:hover {
      background-color: ${({ theme }) =>
        fade(color, theme.palette.action.hoverOpacity)};

      /* Reset on touch devices, it doesn't add specificity */
      @media (hover: none) {
        background-color: transparent;
      }
    }
  }
`;

const buttonColors = {
  default: createCustomColorCss("primary", "#2f8d2b"),
  inherit: createCustomColorCss("primary", "#2f8d2b"),
  primary: createCustomColorCss("primary", "#2f8d2b"),
  orange: createCustomColorCss("orange", "#f2994a"),
  red: createCustomColorCss("red", "#910f0f"),
  blue: createCustomColorCss("blue", "#2d9cdb"),
  yellow: createCustomColorCss("yellow", "#ecd100"),
  lightGreen: createCustomColorCss("lightGreen", "#4fef48"),
};

export const colors = Object.keys(
  buttonColors,
) as (keyof typeof buttonColors)[];

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
  color?: keyof typeof buttonColors;
  variant?: "text" | "outlined" | "contained" | "fab" | "extendedFab";
};

export const Button = styled<ButtonProps>(props => {
  const { className, color = "default", variant = "text", ...rest } = props;

  const classes: string[] = [];
  if (className) classes.push(className);
  classes.push(`variant-${variant}`);
  classes.push(`color-${color}`);

  return (
    <MuiButton
      className={classes.join(" ")}
      color="default"
      variant={variant}
      {...rest}
    />
  );
})`
  ${typographyCss};
  ${buttonColorsCss};
`;
