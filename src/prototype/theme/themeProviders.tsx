import { Theme } from "@material-ui/core/styles";
import React, { ReactNode } from "react";
// import { ThemeProvider } from "../../display";
import {
  adminAppDrawerTheme,
  darkTheme,
  lightTheme,
  userAppDrawerTheme,
} from "./themes";

/** @deprecated */
export const LightTheme = createTheme("light");
/** @deprecated */
export const DarkTheme = createTheme("dark");
/** @deprecated */
export const AdminAppDrawerTheme = createTheme("adminAppDrawer");
/** @deprecated */
export const UserAppDrawerTheme = createTheme("userAppDrawer");

let warned = false;

function createTheme(
  themeType: "light" | "dark" | "adminAppDrawer" | "userAppDrawer",
) {
  // @ts-ignore
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

    if (process.browser && !warned) {
      warned = true;
      /* tslint:disable-next-line:no-console */
      console.trace('Depreciated "StaticThemeProvider" was used.');
    }

    return <>{children}</>;
  }
}
