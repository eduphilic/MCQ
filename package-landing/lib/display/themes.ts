import createMuiTheme, {
  Theme,
  ThemeOptions,
} from "@material-ui/core/styles/createMuiTheme";
import produce from "immer";

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
  // tslint:disable-next-line:no-empty
  light: produce(baseThemeOptions, _draft => {}),
};

export type Theme = Theme;

export const themes: Record<ThemeVariant, Theme> = {
  dark: createMuiTheme(themeVariantThemeOptionsMap.dark),
  light: createMuiTheme(themeVariantThemeOptionsMap.light),
};
