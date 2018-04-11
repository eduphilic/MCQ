import React from "react";
import PropTypes from "prop-types";
import { MuiThemeProvider } from "material-ui/styles";
import { darkTheme } from "./themes";

const ThemeProviderDark = ({ children }) => (
  <MuiThemeProvider theme={darkTheme}>{children}</MuiThemeProvider>
);

ThemeProviderDark.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeProviderDark;
