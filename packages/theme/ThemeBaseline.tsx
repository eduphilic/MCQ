import CssBaseline from "material-ui/CssBaseline";
import React, { SFC } from "react";
import { Helmet } from "react-helmet";
import { CompatibilityFix } from "./CompatibilityFix";

const stylesheets = [
  // Material UI fonts.
  "https://fonts.googleapis.com/css?family=Roboto:300,400,500",
  "https://fonts.googleapis.com/css?family=Montserrat:300,400,500,700",

  // Material UI icons.
  "https://fonts.googleapis.com/icon?family=Material+Icons",
];

const defaultFontStyleProps = {
  dangerouslySetInnerHTML: {
    __html: `
body {
  font-family: 'Montserrat', sans-serif;
}`.replace(/\s/g, ""),
  },
};

export const ThemeBaseline: SFC<{}> = ({ children }) => (
  <CompatibilityFix>
    <>
      <CssBaseline />

      <Helmet>
        {stylesheets.map((href, key) => (
          <link key={key} href={href} rel="stylesheet" />
        ))}

        <style {...defaultFontStyleProps} />
      </Helmet>

      {children}
    </>
  </CompatibilityFix>
);
