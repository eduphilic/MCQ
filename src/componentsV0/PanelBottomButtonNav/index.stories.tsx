import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import { ContentCenterWrapper } from "componentsV0/ContentCenterWrapper";
import React from "react";
import { PanelBottomButtonNav } from ".";

storiesOf("Components", module).add("PanelBottomButtonNav", () => (
  <ContentCenterWrapper>
    <PanelBottomButtonNav
      label={
        boolean("With Label", true)
          ? "Category Selected : Paramilitary (Asst comdt)"
          : undefined
      }
      backButtonLabel="Back"
      nextButtonLabel="Next"
      showBackButton
      showNextButton
      onBackButtonClick={action("onBackButtonClick")}
      onNextButtonClick={action("onNextButtonClick")}
    />
  </ContentCenterWrapper>
));
