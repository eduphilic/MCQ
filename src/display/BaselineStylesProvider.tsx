import { CssBaseline } from "@material-ui/core";
import { StylesProvider } from "@material-ui/styles";
import React, { ReactNode } from "react";
import { ThemeProvider } from "./ThemeProvider";
import { themes } from "./themes";

type Props = {
  children?: ReactNode;
};

/**
 * Handles setting the CSS injection order between Material UI and Styled
 * Components' style engines. It sets the default theme and applies the baseline
 * CSS styles.
 */
export function BaselineStylesProvider(props: Props) {
  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={themes.light}>
        <CssBaseline />

        {props.children}
      </ThemeProvider>
    </StylesProvider>
  );
}