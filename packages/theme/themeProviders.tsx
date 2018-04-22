import { MuiThemeProvider } from "material-ui/styles";
import React, { SFC } from "react";
import { ThemeProvider as StyledComponentsThemeProvider } from "./styledComponents";
import { darkTheme, lightTheme } from "./themes";

export const LightTheme = createTheme("light");
export const DarkTheme = createTheme("dark");
export const AdminAppDrawerTheme = createTheme("adminAppDrawer");

function createTheme(themeType: "light" | "dark" | "adminAppDrawer") {
  const theme = themeType === "light" ? lightTheme : darkTheme;

  return (({ children }) => (
    <MuiThemeProvider theme={theme}>
      <StyledComponentsThemeProvider theme={theme}>
        {children}
      </StyledComponentsThemeProvider>
    </MuiThemeProvider>
  )) as SFC<{}>;
}
