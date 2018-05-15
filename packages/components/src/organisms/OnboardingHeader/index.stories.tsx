import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React from "react";
import { OnboardingHeader } from ".";
import { ContentCenterWrapper } from "../../atoms/ContentCenterWrapper";

storiesOf("Organisms", module).add(
  "OnboardingHeader",
  withInfo()(() => (
    <ContentCenterWrapper>
      <OnboardingHeader
        logoutButtonProps={{ onClick: action("onLogoutButtonClick") }}
      />
    </ContentCenterWrapper>
  )),
);
