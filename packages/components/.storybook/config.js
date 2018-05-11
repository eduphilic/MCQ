// @ts-check
/// <reference path="../../../typings/storybook__addon-options.d.ts" />
import React from "react";
import { configure, addDecorator } from "@storybook/react";
import { setOptions as setStorybookOptions } from "@storybook/addon-options";
import { setDefaults as setInfoAddonDefaults } from "@storybook/addon-info";
import { withKnobs } from "@storybook/addon-knobs";
import { ThemeBaseline, LightTheme } from "theme";

setStorybookOptions({
  // addonPanelInRight: true,
  name: "bhartitest",
  url: "https://dev.bhartitest.com/",
});

setInfoAddonDefaults({
  inline: true,
});

addDecorator(withKnobs);
addDecorator(story => (
  <ThemeBaseline>
    <LightTheme>{story()}</LightTheme>
  </ThemeBaseline>
));

const req = require.context("..", true, /.stories\.tsx$/);
const loadStories = () => {
  req.keys().forEach(filename => req(filename));
};

configure(loadStories, module);
