import React, { Fragment } from "react";
import propTypes from "prop-types";
import CssBaseline from "material-ui/CssBaseline";
import { injectGlobal } from "styled-components";
import MaterialUIStyleInjectOrder from "../MaterialUIStyleInjectOrder";

/** @type { React.SFC<{}> } */
const LayoutLanding = ({ children }) => (
  <MaterialUIStyleInjectOrder>
    <Fragment>
      <CssBaseline />
      {children}
    </Fragment>
  </MaterialUIStyleInjectOrder>
);

LayoutLanding.propTypes = {
  children: propTypes.node.isRequired,
};

export default LayoutLanding;

/* eslint-disable-next-line no-unused-expressions */
injectGlobal`
  body {
    font-family: 'Montserrat', sans-serif;
  }
`;
