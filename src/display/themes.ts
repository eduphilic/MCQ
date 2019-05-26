import { createMuiTheme } from "@material-ui/core";
import { ThemeOptions } from "@material-ui/core/styles/createMuiTheme";
import { CSSProperties } from "@material-ui/styles";
import montserratLatin300Woff from "typeface-montserrat/files/montserrat-latin-300.woff";
import montserratLatin300Woff2 from "typeface-montserrat/files/montserrat-latin-300.woff2";
import montserratLatin400Woff from "typeface-montserrat/files/montserrat-latin-400.woff";
import montserratLatin400Woff2 from "typeface-montserrat/files/montserrat-latin-400.woff2";
import montserratLatin500Woff from "typeface-montserrat/files/montserrat-latin-500.woff";
import montserratLatin500Woff2 from "typeface-montserrat/files/montserrat-latin-500.woff2";

// https://material-ui.com/components/typography/#install-with-npm
const montserratVariants: {
  fontWeight: number;
  src: string;
}[] = [
  {
    fontWeight: 300,
    src: `
      local('Montserrat Light '),
      local('Montserrat-Light'),
      url('${montserratLatin300Woff2}') format('woff2'),
      url('${montserratLatin300Woff}') format('woff')
    `,
  },
  {
    fontWeight: 400,
    src: `
      local('Montserrat Regular '),
      local('Montserrat-Regular'),
      url('${montserratLatin400Woff2}') format('woff2'),
      url('${montserratLatin400Woff}') format('woff')
    `,
  },
  {
    fontWeight: 500,
    src: `
      local('Montserrat Medium '),
      local('Montserrat-Medium'),
      url('${montserratLatin500Woff2}') format('woff2'),
      url('${montserratLatin500Woff}') format('woff')
    `,
  },
];

const montserrat = montserratVariants.map(variant => ({
  fontFamily: "Montserrat",
  fontStyle: "normal",
  fontDisplay: "swap",

  ...variant,
}));

const baseThemeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: "#f9d017",
    },
    secondary: {
      main: "#00b150",
    },
  },

  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(", "),
  },

  overrides: {
    MuiCssBaseline: {
      "@global": {
        // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/35614
        "@font-face": (montserrat as unknown) as CSSProperties,
      },
    },
  },
};

export const themes = {
  light: createMuiTheme({
    ...baseThemeOptions,
  }),

  dark: createMuiTheme({
    ...baseThemeOptions,

    palette: {
      ...baseThemeOptions.palette,
      type: "dark",
    },
  }),
};
