import React, { Fragment } from "react";
import { configure, addDecorator } from "@storybook/react";
import { setOptions } from "@storybook/addon-options";
import { setDefaults } from "@storybook/addon-info";
import { withKnobs } from "@storybook/addon-knobs";
import { Helmet } from "react-helmet";
import ThemeProvider from "site-components/ThemeProvider";

// Storybook Options
setOptions({
  addonPanelInRight: true,
});

// Addon Info Options
setDefaults({
  inline: true,
});

addDecorator(withKnobs);

// Load in fonts and baseline styles.
addDecorator(story => (
  <ThemeProvider>
    <Helmet>
      {/*  Material UI fonts. */}
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,700"
        rel="stylesheet"
      />

      {/* Material UI icons. */}
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
    </Helmet>
    {story()}
  </ThemeProvider>
));

const req = require.context("../stories", true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
