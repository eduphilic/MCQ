import { storiesOf } from "@storybook/react";
import { ContentCenterWrapper } from "componentsV0/ContentCenterWrapper";
import React from "react";
import { OnboardingHeader } from ".";

storiesOf("Components V0", module).add("OnboardingHeader", () => (
  <ContentCenterWrapper>
    <OnboardingHeader
    // logoutButtonProps={{ onClick: action("onLogoutButtonClick") }}
    />
  </ContentCenterWrapper>
));
