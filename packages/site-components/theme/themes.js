import { createMuiTheme } from "material-ui/styles";

const themeBase = {
  palette: {
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
  ...themeBase,
});

export const darkTheme = createMuiTheme({
  ...themeBase,
  palette: {
    ...themeBase.palette,
    type: "dark",
  },
});
