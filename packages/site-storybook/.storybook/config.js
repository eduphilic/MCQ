import React from "react";
import { configure, addDecorator } from "@storybook/react";
import { setOptions } from "@storybook/addon-options";
import { setDefaults } from "@storybook/addon-info";
import ThemeProvider from "site-components/ThemeProvider";

setOptions({
  addonPanelInRight: true,
});

setDefaults({
  inline: true,
});

addDecorator(story => <ThemeProvider>{story()}</ThemeProvider>);

const req = require.context("../stories", true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
