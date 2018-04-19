import { withInfo } from "@storybook/addon-info";
import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import { PanelBottomButtonNav } from ".";
import { ContentCenterWrapper } from "../../atoms/ContentCenterWrapper";

storiesOf("Organisms", module).add(
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
      />
    </ContentCenterWrapper>
  )),
);
