// tslint:disable-next-line:import-name
import MuiTypography, {
  TypographyProps as MuiTypographyProps,
} from "material-ui/Typography";
import React, { SFC } from "react";
import styled, { css } from "styled";

/** Available typography variants. */
export const variants: Variant[] = [
  "body",
  "cardTitle",
  "cardLargeStatText",
  "cardStatCaption",
];
type Variant = "body" | "cardTitle" | "cardLargeStatText" | "cardStatCaption";
type VariantStyles = Record<
  Variant,
  {
    css?: ReturnType<typeof css> | undefined;
    variant?: MuiTypographyProps["variant"];
  }
>;

// Provide styling overrides for the various typography variants.
const variantStyles: VariantStyles = {
  body: {},
  cardTitle: {
    css: css`
      font-size: 18px;
    `,
  },
  cardLargeStatText: {
    variant: "display1",
  },
  cardStatCaption: { variant: "caption" },
};

export interface TypographyProps {
  className?: string;

  /**
   * The style variant of the typography to use.
   *
   * @default body
   */
  variant?: Variant;

  /**
   * The component to wrap the text in.
   *
   * @default span
   */
  component?: MuiTypographyProps["component"];

  /**
   * Material UI typography prop overrides to apply.
   */
  muiTypographyProps?: MuiTypographyProps;
}

const TypographyBase: SFC<TypographyProps> = props => {
  const { children, className, component, variant, muiTypographyProps } = props;

  const muiVariant = variantStyles[variant || "body"].variant;

  return (
    <MuiTypography
      className={className}
      component={component || "span"}
      variant={muiVariant}
      {...muiTypographyProps}
    >
      {children}
    </MuiTypography>
  );
};

/**
 * Provides a standard set of text typography to use throughout the application.
 */
export const Typography = styled(TypographyBase)`
  ${({ variant }) =>
    variant ? variantStyles[variant].css : variantStyles.body.css};
`;
Typography.displayName = "Typography";
