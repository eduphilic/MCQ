// import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import { ContentCenterWrapper } from "components/ContentCenterWrapper";
import React from "react";
import { OnboardingHeader } from ".";

storiesOf("Components", module).add(
  "OnboardingHeader",
  withInfo()(() => (
    <ContentCenterWrapper>
      <OnboardingHeader
      // logoutButtonProps={{ onClick: action("onLogoutButtonClick") }}
      />
    </ContentCenterWrapper>
  )),
);
