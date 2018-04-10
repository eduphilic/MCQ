import React from "react";
import { configure, addDecorator } from "@storybook/react";
import { setOptions } from "@storybook/addon-options";
// import { configure as configureViewportAddon } from "@storybook/addon-viewport";
import ThemeProvider from "site-components/ThemeProvider";

setOptions({
  addonPanelInRight: true,
});

// configureViewportAddon({});

addDecorator(story => <ThemeProvider>{story()}</ThemeProvider>);

const req = require.context("../stories", true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
