import React, { Fragment } from "react";
import propTypes from "prop-types";

/** @type { React.SFC<{}> } */
const LayoutLanding = ({ children }) => <Fragment>{children}</Fragment>;

LayoutLanding.propTypes = {
  children: propTypes.node.isRequired,
};

export default LayoutLanding;
