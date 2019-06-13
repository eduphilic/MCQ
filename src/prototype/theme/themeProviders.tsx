import { Theme } from "@material-ui/core/styles";
import React, { ReactNode } from "react";
import { ThemeProvider } from "../../display";
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

  StaticThemeProvider.displayName = `StaticThemeProvider(${themeType})`;
  return StaticThemeProvider;

  function StaticThemeProvider(props: { children?: ReactNode }) {
    const { children } = props;

    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
  }
}
