import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import React from "react";
import { OnboardingAppBar } from ".";

storiesOf("Components", module).add("OnboardingAppBar", () => {
  //

  return (
    <OnboardingAppBar onLogoutButtonClick={action("onLogoutButtonClick")} />
  );
});
