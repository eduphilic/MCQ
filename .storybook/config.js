import React from "react";
import { configure, addDecorator } from "@storybook/react";
import { setOptions as setStorybookOptions } from "@storybook/addon-options";
import { setDefaults as setInfoAddonDefaults } from "@storybook/addon-info";
import { withKnobs } from "@storybook/addon-knobs";
// import { whyDidYouUpdate } from "why-did-you-update";

import { ThemeBaseline, LightTheme } from "theme";
import { DashboardAppBarIconStore } from "stores";
import { ExamNavigationStorePlaceholderProvider } from "components/ExamNavigationStorePlaceholder";

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
  <ThemeBaseline>
    <LightTheme>
      <DashboardAppBarIconStore.Provider>
        <ExamNavigationStorePlaceholderProvider>
          {story()}
        </ExamNavigationStorePlaceholderProvider>
      </DashboardAppBarIconStore.Provider>
    </LightTheme>
  </ThemeBaseline>
));

const req = require.context("../src", true, /.stories\.tsx$/);
const loadStories = () => {
  req.keys().forEach(filename => req(filename));
};

configure(loadStories, module);
