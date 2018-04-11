import React, { Fragment } from "react";
import { configure, addDecorator } from "@storybook/react";
import { setOptions } from "@storybook/addon-options";
import { setDefaults } from "@storybook/addon-info";
import { withKnobs } from "@storybook/addon-knobs";
import { ThemeBaseline, ThemeProvider } from "site-components/theme";

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
  <ThemeBaseline>
    <ThemeProvider>{story()}</ThemeProvider>
  </ThemeBaseline>
));

const req = require.context("../stories", true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
