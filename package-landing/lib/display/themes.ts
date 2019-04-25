import { createMuiTheme } from "@material-ui/core";
import { Theme, ThemeOptions } from "@material-ui/core/styles/createMuiTheme";
import produce from "immer";
import "typeface-montserrat";

export type ThemeVariant = "light" | "dark";

const baseThemeOptions: ThemeOptions = {
  typography: {
    fontFamily: "'Montserrat', sans-serif",
  },
};

const themeVariantThemeOptionsMap: Record<ThemeVariant, ThemeOptions> = {
  dark: produce(baseThemeOptions, draft => {
    draft.palette = draft.palette || {};
    draft.palette.type = "dark";
  }),
  light: baseThemeOptions,
};

export type Theme = Theme;

export const themes: Record<ThemeVariant, Theme> = {
  dark: createMuiTheme(themeVariantThemeOptionsMap.dark),
  light: createMuiTheme(themeVariantThemeOptionsMap.light),
};
