import { css } from "./styledComponents";

export const mixins = {
  gutters: (
    styles: {
      xs?: ReturnType<typeof css>;
      sm?: ReturnType<typeof css>;
    } = {},
  ) => {
    return css`
      padding-left: 16px;
      padding-right: 16px;
      ${styles.xs};

      ${({ theme }) => theme.breakpoints.up("sm")} {
        padding-left: 24px;
        padding-right: 24px;
        ${styles.sm};
      }
    `;
  },

  toolbar: css`
    min-height: 56px;

    ${({ theme }) => theme.breakpoints.up("xs")} and (orientation: landscape) {
      min-height: 48px;
    }

    ${({ theme }) => theme.breakpoints.up("sm")} {
      min-height: 64px;
    }
  `,
};
