/**
 * This module forces the stylesheets for Material UI to be placed at the top
 * of the <head> element of the page. This is done so that styles can be
 * overridden by Styled Components.
 *
 * @see https://material-ui-next.com/customization/css-in-js/#other-html-element
 */

/* eslint-disable import/no-extraneous-dependencies */
import React, { Component } from "react";
import PropTypes from "prop-types";
import JssProvider from "react-jss/lib/JssProvider";
import { create } from "jss";
import { createGenerateClassName, jssPreset } from "material-ui/styles";

const insertionPointId = "jss-insertion-point";

export default class MaterialUIStyleInjectOrder extends Component {
  static propTypes = { children: PropTypes.node.isRequired };

  constructor(props) {
    super(props);

    // Part of the rendering process in Next.js happens in the Node environment
    // so we check that we are in a browser before performing any DOM
    // manipulation.
    if (process.browser) {
      // Create an element that will be the marker for where we want Material UI
      // to inject its stylesheets.
      let insertionPoint = document.getElementById(insertionPointId);
      if (!insertionPoint) {
        insertionPoint = document.createElement("noscript");
        insertionPoint.id = insertionPointId;
        document.head.insertBefore(insertionPoint, document.head.firstChild);
      }

      const generateClassName = createGenerateClassName();
      const jss = create(jssPreset());
      jss.options.insertionPoint = insertionPoint;

      this.jssProviderProps = {
        jss,
        generateClassName,
      };
    }
  }

  render() {
    // The props for <JssProvider /> will only exist if we are in a browser
    // environment. If we are not, don't do anything special and skip this.
    if (this.jssProviderProps) {
      return (
        <JssProvider {...this.jssProviderProps}>
          {this.props.children}
        </JssProvider>
      );
    }

    return this.props.children;
  }
}
