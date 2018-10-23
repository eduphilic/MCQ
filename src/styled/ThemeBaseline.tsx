import CssBaseline from "@material-ui/core/CssBaseline";
import React, { SFC } from "react";
import { createGlobalStyle } from "./styledComponents";

export const ThemeBaseline: SFC<{}> = ({ children }) => (
  <>
    <CssBaseline />
    <RootGlobalStyle />

    {children}
  </>
);

const RootGlobalStyle = createGlobalStyle`
body {
  font-family: 'Montserrat', sans-serif;
}

/* Prevent iPhone page zoom on input selection. */
@media screen and (-webkit-min-device-pixel-ratio: 0) and (max-device-width: 1024px) {
  select,
  textarea,
  input {
    font-size: 16px !important;
  }
}

html, body {
  height: 100%;
}

body, #root, #root > div:first-child {
  display: flex;
  flex-direction: column;
}

#root, #root > div:first-child {
  flex: 1;
}
`;
