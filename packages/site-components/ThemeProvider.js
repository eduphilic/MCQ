/* eslint-disable import/no-extraneous-dependencies */
import React, { Fragment } from "react";
import PropTypes from "prop-types";
import CssBaseline from "material-ui/CssBaseline";
import { MuiThemeProvider, createMuiTheme } from "material-ui/styles";
import { injectGlobal } from "styled-components";
import MaterialUIStyleInjectOrder from "site-components/MaterialUIStyleInjectOrder";

export const theme = createMuiTheme({
  typography: {
    fontFamily: "'Montserrat', sans-serif",
  },
});

const ThemeProvider = ({ children }) => (
  <MuiThemeProvider theme={theme}>
    <MaterialUIStyleInjectOrder>
      <Fragment>
        <CssBaseline />
        {children}
      </Fragment>
    </MaterialUIStyleInjectOrder>
  </MuiThemeProvider>
);

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeProvider;

/* eslint-disable-next-line no-unused-expressions */
injectGlobal`
  body {
    font-family: 'Montserrat', sans-serif;
  }
`;
