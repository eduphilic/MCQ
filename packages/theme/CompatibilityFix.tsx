/**
 * The purpose of this module is to force the Material UI component library to
 * insert its stylesheets at the top of the document head. This allows the
 * overriding styles from Styled Components to have the correct CSS specificity.
 *
 * @see https://material-ui-next.com/customization/css-in-js/#css-injection-order
 */

/* tslint:disable no-implicit-dependencies no-submodule-imports */
import React, { SFC } from "react";

import { create } from "jss";
import { createGenerateClassName, jssPreset } from "material-ui/styles";
// @ts-ignore
import JssProvider from "react-jss/lib/JssProvider";

let CompatibilityFix: SFC<any>;

const insertionPoint = " jss-insertion-point ";
if (process.browser) {
  // Apply the fix in browser environments.
  createInsertionPointIfMissing();

  const generateClassName = createGenerateClassName();
  const jss = create(jssPreset());
  // @ts-ignore
  jss.options.insertionPoint = insertionPoint.trim();

  CompatibilityFix = ({ children }) => (
    <JssProvider jss={jss} generateClassName={generateClassName}>
      {children}
    </JssProvider>
  );
} else {
  // Avoid applying the fix outside of browser environments. This prevents
  // errors during server side rendering.
  CompatibilityFix = ({ children }) => children;
}

export { CompatibilityFix };

/**
 * Inserts a comment block at the top of <head> if it is not already present to
 * mark the location of where the Material UI stylesheets should be inserted.
 *
 * ```
 * <head>
 *  <!-- jss-insertion-point -->
 *  <title>Document</title>
 * </head>
 * ```
 */
function createInsertionPointIfMissing() {
  const commentNodeType = 8;

  // Determine if insertion point has already been added to <head>.
  const childNodes = document.head.childNodes;
  for (let i = 0; i < childNodes.length; i += 1) {
    const node = childNodes.item(i);
    if (
      node.nodeType === commentNodeType &&
      node.nodeValue === insertionPoint
    ) {
      return;
    }
  }

  const commentNode = document.createComment(insertionPoint);
  document.head.insertBefore(commentNode, document.head.firstChild);
}
