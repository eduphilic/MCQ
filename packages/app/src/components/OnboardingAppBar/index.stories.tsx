import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React from "react";
import { OnboardingAppBar } from ".";

storiesOf("Components", module).add(
  "OnboardingAppBar",
  withInfo()(() => {
    //

    return (
      <OnboardingAppBar onLogoutButtonClick={action("onLogoutButtonClick")} />
    );
  }),
);
