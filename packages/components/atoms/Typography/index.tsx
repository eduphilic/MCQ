// tslint:disable-next-line:import-name
import MuiTypography, {
  TypographyProps as MuiTypographyProps,
} from "material-ui/Typography";
import React, { SFC } from "react";
import styled, { ThemedStyledFunction } from "styled";

export enum Variant {
  body = "body",
  cardTitle = "cardTitle",
  cardLargeStatText = "cardLargeStatText",
  cardStatCaption = "cardStatCaption",
  tableHeadCell = "tableHeadCell",
  buttonBold = "buttonBold",
  formFieldTitle = "formFieldTitle",
}

type StyledMuiTypography = ReturnType<ThemedStyledFunction<MuiTypographyProps>>;

// Provide styling overrides for the various typography variants.
const variants: Record<Variant, StyledMuiTypography> = {
  body: styled(MuiTypography)``,

  cardTitle: styled(MuiTypography)`
    font-size: 18px;
    font-weight: 500;
  `,

  cardLargeStatText: styled(MuiTypography).attrs({ variant: "display1" })``,

  cardStatCaption: styled(MuiTypography).attrs({ variant: "caption" })``,

  tableHeadCell: styled(MuiTypography).attrs({ variant: "body2" })``,

  buttonBold: styled(MuiTypography).attrs({ variant: "body2" })``,

  formFieldTitle: styled(MuiTypography).attrs({ variant: "body2" })`
    color: ${({ theme }) => theme.palette.grey["700"]};
  `,
};

export interface TypographyProps {
  className?: string;

  /**
   * The style variant of the typography to use.
   *
   * @default body
   */
  variant?: keyof typeof Variant;

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

/**
 * Provides a standard set of text typography to use throughout the application.
 */
export const Typography: SFC<TypographyProps> = props => {
  const { children, className, component, muiTypographyProps, variant } = props;

  const TypographyBase = variants[variant || "body"];

  return (
    <TypographyBase
      className={className}
      component={component || "span"}
      {...muiTypographyProps as any}
    >
      {children}
    </TypographyBase>
  );
};
