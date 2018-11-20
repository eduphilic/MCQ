import React, { ReactNode } from "react";
import { SnackbarsProvider } from "./features/display";
import { LanguageProvider } from "./features/localization";
import { SessionProvider } from "./features/session";
import { LightTheme, ThemeBaseline } from "./styled";

export function AppProviders(props: { children?: ReactNode }) {
  return (
    <SessionProvider>
      <LanguageProvider>
        <ThemeBaseline>
          <LightTheme>
            <SnackbarsProvider>{props.children}</SnackbarsProvider>
          </LightTheme>
        </ThemeBaseline>
      </LanguageProvider>
    </SessionProvider>
  );
}
