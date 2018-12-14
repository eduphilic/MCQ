import { css } from "@join-uniform/theme";

export function generateToolbarHeightBasedCss(
  reduction: number,
  field = "height" as "width" | "height",
) {
  return css(({ theme }) => ({
    [field]: `${56 - reduction}px`,

    [`${theme.breakpoints.up("xs")} and (orientation: landscape)`]: {
      [field]: `${48 - reduction}px`,
    },

    [`${theme.breakpoints.up("sm")}`]: {
      [field]: `${64 - reduction}px`,
    },
  }));
}
