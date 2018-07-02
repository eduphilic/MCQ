import React from "react";
import { configure, addDecorator } from "@storybook/react";
import { setOptions as setStorybookOptions } from "@storybook/addon-options";
import { setDefaults as setInfoAddonDefaults } from "@storybook/addon-info";
import { withKnobs } from "@storybook/addon-knobs";
// import { whyDidYouUpdate } from "why-did-you-update";

import { ThemeBaseline, LightTheme } from "theme";
import { DashboardAppBarIconStore } from "stores";
import { PlaceholderProvider } from "store";

// if (process.env.NODE_ENV !== "production") {
//   whyDidYouUpdate(React);
// }

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

const req = require.context("../src", true, /.stories\.tsx$/);
const loadStories = () => {
  req.keys().forEach(filename => req(filename));
};

configure(loadStories, module);
