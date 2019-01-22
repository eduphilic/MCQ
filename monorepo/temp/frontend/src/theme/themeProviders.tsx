import { MuiThemeProvider, Theme } from "@material-ui/core/styles";
import React, { SFC } from "react";
import { ThemeProvider as StyledComponentsThemeProvider } from "./styledComponents";
import {
  adminAppDrawerTheme,
  darkTheme,
  lightTheme,
  userAppDrawerTheme,
} from "./themes";

export const LightTheme = createTheme("light");
export const DarkTheme = createTheme("dark");
export const AdminAppDrawerTheme = createTheme("adminAppDrawer");
export const UserAppDrawerTheme = createTheme("userAppDrawer");

function createTheme(
  themeType: "light" | "dark" | "adminAppDrawer" | "userAppDrawer",
) {
  let theme: Theme;
  switch (themeType) {
    case "light":
      theme = lightTheme;
      break;
    case "dark":
      theme = darkTheme;
      break;
    case "adminAppDrawer":
      theme = adminAppDrawerTheme;
      break;
    case "userAppDrawer":
      theme = userAppDrawerTheme;
      break;
  }

  return (({ children }) => (
    <MuiThemeProvider theme={theme}>
      <StyledComponentsThemeProvider theme={theme}>
        {children}
      </StyledComponentsThemeProvider>
    </MuiThemeProvider>
  )) as SFC<{}>;
}
