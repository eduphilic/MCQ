import React from "react";
import { configure, addDecorator } from "@storybook/react";
import { setOptions as setStorybookOptions } from "@storybook/addon-options";
import { setDefaults as setInfoAddonDefaults } from "@storybook/addon-info";
import { withKnobs } from "@storybook/addon-knobs";

import { ThemeBaseline, LightTheme } from "theme";
import { PageTitleProvider } from "components/PageTitleProvider";
import { PageTitleSetter } from "components/PageTitleSetter";

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
    <LightTheme>
      <PageTitleProvider>
        <PageTitleSetter title="Page Title" />
        {story()}
      </PageTitleProvider>
    </LightTheme>
  </ThemeBaseline>
));

const req = require.context("../src", true, /.stories\.tsx$/);
const loadStories = () => {
  req.keys().forEach(filename => req(filename));
};

configure(loadStories, module);