/**
 * This module provides overrides to the default theme of Material UI.
 *
 * @see https://material-ui-next.com/customization/default-theme/
 */
import { createMuiTheme } from "material-ui/styles";

const theme = {
  palette: {
    background: {
      default: "#fff",
    },
    primary: {
      main: "#2f8d2b", // green
    },
    secondary: {
      main: "#f9d017", // yellow
    },
  },
  typography: {
    fontFamily: "'Montserrat', sans-serif",
  },
};

export const lightTheme = createMuiTheme({
  ...theme,
});

export const darkTheme = createMuiTheme({
  ...theme,
  palette: {
    ...theme.palette,
    type: "dark",
  },
});

export type Theme = typeof lightTheme;
