import { storiesOf } from "@storybook/react";
import React from "react";
import { OnboardingPlanCustomizer } from ".";
import { createPlaceholderOnboardingPlanCustomizerProps } from "./createPlaceholderOnboardingPlanCustomizerProps";

storiesOf("Components", module).add("OnboardingPlanCustomizer", () => {
  const props = createPlaceholderOnboardingPlanCustomizerProps();

  return <OnboardingPlanCustomizer {...props} />;
});
