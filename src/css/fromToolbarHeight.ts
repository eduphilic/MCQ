import { CSSProperties } from "react";
import { css } from "styled";

export const fromToolbarHeight = (property: keyof CSSProperties) => css`
  ${property}: 56px;

  ${({ theme }) => theme.breakpoints.up("xs")} {
    ${property}: 48px;
  }

  ${({ theme }) => theme.breakpoints.up("sm")} {
    ${property}: 64px;
  }
`;
