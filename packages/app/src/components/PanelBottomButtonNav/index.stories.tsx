import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import { ContentCenterWrapper } from "components/ContentCenterWrapper";
import React from "react";
import { PanelBottomButtonNav } from ".";

storiesOf("Components", module).add(
  "PanelBottomButtonNav",
  withInfo()(() => (
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
  )),
);
