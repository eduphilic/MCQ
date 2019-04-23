import createMuiTheme, {
  Theme,
  ThemeOptions,
} from "@material-ui/core/styles/createMuiTheme";
import produce from "immer";

type ThemeVariants = "light";

const baseThemeOptions: ThemeOptions = {
  typography: {
    fontFamily: "'Montserrat', sans-serif",
  },
};

const themeVariantThemeOptionsMap: Record<ThemeVariants, ThemeOptions> = {
  light: produce(baseThemeOptions, _draft => {
    //
  }),
};

export type Theme = Theme;

export const themes: Record<ThemeVariants, Theme> = {
  light: createMuiTheme(themeVariantThemeOptionsMap.light),
};
