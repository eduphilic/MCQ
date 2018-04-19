import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React from "react";
import { SelectionSummary } from ".";
import { ContentCenterWrapper } from "../../atoms/ContentCenterWrapper";

storiesOf("Organisms", module).add(
  "SelectionSummary",
  withInfo()(() => (
    <ContentCenterWrapper>
      <SelectionSummary
        label="Selected Entry Type"
        selections="Army, Navy, AirForce"
        onChangeClick={action("onChangeClick")}
      />
    </ContentCenterWrapper>
  )),
);
