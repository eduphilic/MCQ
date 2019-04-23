import { ThemeProvider as MuiThemeProvider } from "@material-ui/styles";
import React, { ReactNode } from "react";
import { themes, ThemeVariant } from "./themes";

type ThemeProviderProps = {
  children?: ReactNode;
  theme: ThemeVariant;
};

export function ThemeProvider(props: ThemeProviderProps) {
  return (
    <MuiThemeProvider theme={themes[props.theme]}>
      {props.children}
    </MuiThemeProvider>
  );
}
