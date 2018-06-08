import React, { SFC } from "react";
import styled, { css } from "styled";
import { Theme } from "theme";

// tslint:disable-next-line:import-name
import MuiButton, {
  ButtonProps as MuiButtonProps,
} from "@material-ui/core/Button";
import { darken, fade } from "@material-ui/core/styles/colorManipulator";

const createCustomColorCss = (name: string, color: string) => css`
  &.color-${name} {
    color: ${color};
  }

  &.color-${name}.raised {
    background-color: #fff;
  }

  &.color-${name}.raised:hover {
    background-color: ${({ theme }) => getHoverBackground(color, theme)};
  }

  &.color-${name}.filled {
    color: ${({ theme }) => theme.palette.getContrastText(color)};
    background-color: ${color};
  }

  &.color-${name}.filled:hover {
    background-color: ${darken(color, 0.2)};
  }
`;

const customColors = {
  orange: createCustomColorCss("orange", "#f2994a"),
  red: createCustomColorCss("red", "#910f0f"),
  blue: createCustomColorCss("blue", "#2d9cdb"),
  yellow: createCustomColorCss("yellow", "#ecd100"),
};

const customColorsCss = css`
  ${customColors.orange};
  ${customColors.red};
  ${customColors.blue};
  ${customColors.yellow};
`;

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
  ${customColorsCss};
`;

export interface ButtonProps extends Omit<MuiButtonProps, "color"> {
  /**
   * Same color options as the Material UI button with the addition of the
   * following additional colors: orange
   */
  color?: MuiButtonProps["color"] | keyof typeof customColors;

  /**
   * Whether or not the button is filled using the selected color.
   */
  filled?: boolean;
}

type ExtendedColor = Exclude<ButtonProps["color"], MuiButtonProps["color"]>;
const extendedColors = Object.keys(customColors) as ExtendedColor[];

/** Material UI button with default styling. */
export const Button: SFC<ButtonProps> = props => {
  const {
    className,
    color = "default",
    variant = "raised",
    filled,
    ...rest
  } = props;

  const usesExtendedColor = extendedColors.includes(color as ExtendedColor);
  const classes: string[] = className ? [className] : [];

  if (["default", ...extendedColors].includes(color)) {
    classes.push(`color-${color}`);
  }
  if (variant === "raised") classes.push("raised");
  if (filled) classes.push("filled");

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
