import { css } from "styled";

/**
 * Corresponds to the Material UI "gutters" mixin.
 *
 * @see https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/styles/createMixins.js
 */
export const gutters = css`
  ${({ theme: { spacing, breakpoints } }) => `
    padding-left: ${spacing.unit * 2}px;
    padding-right: ${spacing.unit * 2}px;

    ${breakpoints.up("sm")} {
      padding-left: ${spacing.unit * 3}px;
      padding-right: ${spacing.unit * 3}px;
    }
  `};
`;
