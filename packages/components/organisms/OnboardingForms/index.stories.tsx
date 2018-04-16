import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { OnboardingForms } from ".";

storiesOf("Organisms", module).add(
  "OnboardingForms",
  withInfo({ propTablesExclude: [BrowserRouter as any] })(() => (
    <div style={{ padding: 16, backgroundColor: "#eee" }}>
      <div style={{ width: 330 }}>
        <BrowserRouter>
          <OnboardingForms
            onLoginSubmit={action("onLoginSubmit")}
            onSignupSubmit={action("onSignupSubmit")}
            passwordResetHref="#"
          />
        </BrowserRouter>
      </div>
    </div>
  )),
);
