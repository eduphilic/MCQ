import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { selectV2 } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import OnboardingHeroLanguageSelect from "site-components/OnboardingHeroLanguageSelect";
import { OnboardingDarkBackdrop } from "./components";

storiesOf("Components", module).add(
  "OnboardingHeroLanguageSelect",
  withInfo({})(() => (
    <OnboardingDarkBackdrop>
      <OnboardingHeroLanguageSelect
        value={selectV2("Language", ["english", "hindi"], "english", "group-1")}
        onChange={action("onChange")}
      />
    </OnboardingDarkBackdrop>
  )),
);
