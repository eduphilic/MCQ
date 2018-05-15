import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React from "react";
import { OnboardingPlanCustomizer } from ".";
import { createPlaceholderOnboardingPlanCustomizerProps } from "./createPlaceholderOnboardingPlanCustomizerProps";

storiesOf("Organisms", module).add(
  "OnboardingPlanCustomizer",
  withInfo()(() => {
    const props = createPlaceholderOnboardingPlanCustomizerProps();

    return <OnboardingPlanCustomizer {...props} />;
  }),
);
