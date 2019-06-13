import { css } from "styled";

const defaultValueBuilder = (spacing: number) => `${spacing}px`;

/**
 * Corresponds to the Material UI "gutters" mixin.
 *
 * @see https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/styles/createMixins.js
 */
export const fromGutters = (
  properties: string[] = ["padding-left", "padding-right"],
  selector: string | null = null,
  valueBuilder = defaultValueBuilder,
) => css`
  ${({ theme: { spacing, breakpoints } }) => `
    ${selector ? `${selector} {` : ""}
      ${properties
        .map(
          p => `
            ${p}: ${valueBuilder(spacing.unit * 2)};
          `,
        )
        .join("\n")};
    ${selector ? "}" : ""}

    ${breakpoints.up("sm")} {
      ${selector ? `${selector} {` : ""}
        ${properties
          .map(
            p => `
              ${p}: ${valueBuilder(spacing.unit * 3)};
            `,
          )
          .join("\n")};
      ${selector ? "}" : ""}
    }
  `};
`;
