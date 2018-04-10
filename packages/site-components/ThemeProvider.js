/* eslint-disable import/no-extraneous-dependencies */
import React, { Fragment } from "react";
import PropTypes from "prop-types";
import CssBaseline from "material-ui/CssBaseline";
import { injectGlobal } from "styled-components";
import MaterialUIStyleInjectOrder from "site-components/MaterialUIStyleInjectOrder";

const ThemeProvider = ({ children }) => (
  <MaterialUIStyleInjectOrder>
    <Fragment>
      <CssBaseline />
      {children}
    </Fragment>
  </MaterialUIStyleInjectOrder>
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
