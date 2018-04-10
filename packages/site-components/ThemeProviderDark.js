import React from "react";
import PropTypes from "prop-types";
import { MuiThemeProvider, createMuiTheme } from "material-ui/styles";
import { theme } from "./ThemeProvider";

const darkTheme = createMuiTheme({
  ...theme,
  palette: { type: "dark" },
});

const ThemeProviderDark = ({ children }) => (
  <MuiThemeProvider theme={darkTheme}>{children}</MuiThemeProvider>
);

ThemeProviderDark.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeProviderDark;
