import CssBaseline from "@material-ui/core/CssBaseline";
import React, { SFC } from "react";
// import { Helmet } from "react-helmet";
import { createGlobalStyle, styled } from "./styledComponents";
// import { lightTheme } from "./themes";

// const stylesheets = [
//   // Material UI fonts.
//   "https://fonts.googleapis.com/css?family=Roboto:300,400,500",
//   "https://fonts.googleapis.com/css?family=Montserrat:300,400,500,700",

//   // Material UI icons.
//   "https://fonts.googleapis.com/icon?family=Material+Icons",
// ];

export const ThemeBaseline: SFC<{}> = ({ children }) => (
  <>
    <CssBaseline />
    <Test>Test</Test>
    <RootGlobalStyle />

    {/* <Helmet>
        {stylesheets.map((href, key) => (
          <link key={key} href={href} rel="stylesheet" />
        ))}
      </Helmet> */}

    {children}
  </>
);

const Test = styled.p`
  color: blue;
`;

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

html, body, #root {
  height: 100%;
}
`;
