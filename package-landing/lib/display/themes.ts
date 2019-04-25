import { createMuiTheme, Theme } from "@material-ui/core";
import { green, yellow } from "@material-ui/core/colors";
import { ThemeOptions } from "@material-ui/core/styles/createMuiTheme";
import produce from "immer";
import "typeface-montserrat";

export type ThemeVariant = "light" | "dark";

const baseThemeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: yellow[600],
    },
    secondary: {
      main: green[500],
    },
  },
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

export const themes: Record<ThemeVariant, Theme> = {
  dark: createMuiTheme(themeVariantThemeOptionsMap.dark),
  light: createMuiTheme(themeVariantThemeOptionsMap.light),
};
