import { lightTheme } from "@join-uniform/theme";
import { jssPreset, MuiThemeProvider } from "@material-ui/core/styles";
import { create } from "jss";
import React, { ReactNode, useEffect, useMemo } from "react";
import JssProvider from "react-jss/lib/JssProvider";
import { MUICssContext } from "./createMUICssContext";

export function MaterialUIThemeProvider(props: {
  children?: ReactNode;
  muiCssContext: MUICssContext;
}) {
  const {
    children,
    muiCssContext: { sheetsRegistry, sheetsManager, generateClassName },
  } = props;

  useEffect(() => {
    if (process.browser) {
      // Remove the server-side injected CSS.
      const jssStyles = document.querySelector("#jss-server-side");
      if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles);
      }
    }
  }, []);

  const jss = useMemo(() => {
    // Ensure Material Design styles are added before those from Styled
    // Components so that Styled Components can override default styles.
    if (process.browser) {
      return create({
        ...jssPreset(),
        insertionPoint: document.getElementById("jss-insertion-point")!,
      });
    }
    return undefined;
  }, []);

  return (
    <JssProvider
      jss={jss}
      registry={sheetsRegistry}
      generateClassName={generateClassName}
    >
      <MuiThemeProvider theme={lightTheme} sheetsManager={sheetsManager}>
        {children}
      </MuiThemeProvider>
    </JssProvider>
  );
}
