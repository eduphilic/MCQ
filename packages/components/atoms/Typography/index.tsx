// tslint:disable-next-line:import-name
import MuiTypography, {
  TypographyProps as MuiTypographyProps,
} from "material-ui/Typography";
import React, { SFC } from "react";
import styled, { css } from "styled";

/** Available typography variants. */
export const variants: Variant[] = ["body", "cardTitle"];
type Variant = "body" | "cardTitle";

// Provide styling overrides for the various typography variants.
const variantStyles: VariantStyles = {
  body: css``,
  cardTitle: css`
    font-size: 18px;
  `,
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
  const { children, className, component, muiTypographyProps } = props;

  return (
    <MuiTypography
      className={className}
      component={component || "span"}
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
  ${({ variant }) => (variant ? variantStyles[variant] : variantStyles.body)};
`;
Typography.displayName = "Typography";

type VariantStyles = Record<Variant, ReturnType<typeof css> | undefined>;
