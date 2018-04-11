import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import CssBaseline from "material-ui/CssBaseline";
import { injectGlobal, ThemeProvider } from "styled-components";
import MaterialUIStyleInjectOrder from "./MaterialUIStyleInjectOrder";
import { lightTheme, darkTheme } from "./themes";

const theme = {
  ...lightTheme,
  dark: darkTheme,
};

const ThemeBaseline = ({ children }) => (
  <MaterialUIStyleInjectOrder>
    <ThemeProvider theme={theme}>
      <Fragment>
        <CssBaseline />

        {/* Insert tags into <Head/>. */}
        <Helmet>
          {/* Material UI fonts. */}
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,700"
            rel="stylesheet"
          />

          {/* Material UI icons. */}
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          />

          <title>bhartitest - Join Uniform</title>
        </Helmet>

        {children}
      </Fragment>
    </ThemeProvider>
  </MaterialUIStyleInjectOrder>
);

ThemeBaseline.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeBaseline;

/* eslint-disable-next-line no-unused-expressions */
injectGlobal`
  body {
    font-family: 'Montserrat', sans-serif;
  }
`;
