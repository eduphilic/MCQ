import { makeStyles, ThemeProvider } from "@material-ui/styles";
import Head from "next/head";
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

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
        <meta name="theme-color" content={theme.palette.primary.main} />
      </Head>

      {children}
    </ThemeProvider>
  );
}
