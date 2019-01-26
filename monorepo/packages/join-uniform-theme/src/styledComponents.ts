/**
 * This module re-exports Styled Components with our custom Material UI theme so
 * that autocompletion and typechecking works with TypeScript.
 *
 * @see https://www.styled-components.com/docs/api#define-a-theme-interface
 */

import * as styledComponents from "styled-components";
// tslint:disable-next-line:no-duplicate-imports
import { ThemedStyledComponentsModule } from "styled-components";

import { Theme } from "./themes";

const {
  default: styled,
  css,
  keyframes,
  ThemeProvider,
  createGlobalStyle,
  ServerStyleSheet,
} = styledComponents as ThemedStyledComponentsModule<Theme>;

export {
  styled,
  css,
  keyframes,
  ThemeProvider,
  createGlobalStyle,
  ServerStyleSheet,
};