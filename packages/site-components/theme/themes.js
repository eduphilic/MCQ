import { createMuiTheme } from "material-ui/styles";

const themeBase = {
  typography: {
    fontFamily: "'Montserrat', sans-serif",
  },
};

export const lightTheme = createMuiTheme({
  ...themeBase,
});

export const darkTheme = createMuiTheme({
  ...themeBase,
  palette: { type: "dark" },
});
