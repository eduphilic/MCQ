import { CSSProperties } from "react";
import { css } from "styled";

const defaultValueBuilder = (height: number) => `${height}px`;

export const fromToolbarHeight = (
  property: keyof CSSProperties,
  valueBuilder = defaultValueBuilder,
) => css`
  ${property}: ${valueBuilder(56)};

  ${({ theme }) => theme.breakpoints.up("xs")} {
    ${property}: ${valueBuilder(48)};
  }

  ${({ theme }) => theme.breakpoints.up("sm")} {
    ${property}: ${valueBuilder(64)};
  }
`;
