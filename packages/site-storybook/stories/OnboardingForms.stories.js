import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";
import OnboardingForms from "site-components/OnboardingForms";
import { OnboardingDarkBackdrop } from "./components";

storiesOf("Components", module).add(
  "OnboardingForms",
  withInfo({})(() => (
    <OnboardingDarkBackdrop>
      <div style={{ width: 400 }}>
        <OnboardingForms
          onLoginSubmit={action("onLoginSubmit")}
          onSignupSubmit={action("onSignupSubmit")}
          onForgotPasswordClick={action("onForgotPassword")}
        />
      </div>
    </OnboardingDarkBackdrop>
  )),
);
