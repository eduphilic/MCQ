import { withInfo } from "@storybook/addon-info";
import { withKnobs } from "@storybook/addon-knobs";
import { setOptions as setStorybookOptions } from "@storybook/addon-options";
import { addDecorator, configure } from "@storybook/react";
import React from "react";
import { withFormik } from "../../user/src/componentsV0/storybook/StorybookFormikAddon";

import { PlaceholderProvider } from "../../user/src/store";
import { DashboardAppBarIconStore } from "../../user/src/stores";
import { LightTheme, ThemeBaseline } from "../../user/src/theme";

setStorybookOptions({
  name: "bhartitest",
  url: "https://dev.bhartitest.com/",
});

addDecorator(withInfo({ inline: true }));
addDecorator(withKnobs);
addDecorator(withFormik);
addDecorator(story => (
  <PlaceholderProvider>
    <ThemeBaseline>
      <LightTheme>
        <DashboardAppBarIconStore.Provider>
          {story()}
        </DashboardAppBarIconStore.Provider>
      </LightTheme>
    </ThemeBaseline>
  </PlaceholderProvider>
));

// Sources for Storybook stories. Include all monorepo packages containing
// components with stories.
const requireContexts = [
  require.context("../../user/src", true, /\.stories\.tsx$/),
  //
];

const loadStories = () => {
  requireContexts.forEach(req => {
    req.keys().forEach(filename => req(filename));
  });
};

configure(loadStories, module);
