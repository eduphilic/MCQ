import { Theme } from "@material-ui/core";
import { ThemeProvider as MaterialUIThemeProvider } from "@material-ui/styles";
import React, { ReactNode } from "react";
import { ThemeProvider as StyledComponentsThemeProvider } from "styled-components";

type Props = {
  children?: ReactNode;
  theme: Theme;
};

export function ThemeProvider(props: Props) {
  return (
    <MaterialUIThemeProvider theme={props.theme}>
      <StyledComponentsThemeProvider theme={props.theme}>
        <>{props.children}</>
      </StyledComponentsThemeProvider>
    </MaterialUIThemeProvider>
  );
}
