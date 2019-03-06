import { makeStyles, ThemeProvider } from "@material-ui/styles";
import React, { ReactNode } from "react";
import "typeface-montserrat";
import { theme } from "./theme";

type Props = { children?: ReactNode };

const useStyles = makeStyles({
  "@global": {
    html: {
      boxSizing: "border-box",
    },

    "*, *:before, *:after": {
      boxSizing: "inherit",
    },

    body: {
      margin: 0,
    },
  },
});

export function ThemeBaseline({ children }: Props) {
  useStyles();

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
