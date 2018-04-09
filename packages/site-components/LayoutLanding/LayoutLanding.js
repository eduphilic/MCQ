import React, { Fragment } from "react";
import propTypes from "prop-types";
import CssBaseline from "material-ui/CssBaseline";

const LayoutLanding = ({ children }) => (
  <Fragment>
    <CssBaseline />
    {children}
  </Fragment>
);

LayoutLanding.propTypes = {
  children: propTypes.node.isRequired,
};

export default LayoutLanding;
