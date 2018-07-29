import { storiesOf } from "@storybook/react";
import { ContentCenterWrapper } from "components/ContentCenterWrapper";
import React from "react";
import { OnboardingHeader } from ".";

storiesOf("Components", module).add("OnboardingHeader", () => (
  <ContentCenterWrapper>
    <OnboardingHeader
    // logoutButtonProps={{ onClick: action("onLogoutButtonClick") }}
    />
  </ContentCenterWrapper>
));
