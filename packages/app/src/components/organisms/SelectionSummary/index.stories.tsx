import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { SelectionSummary } from ".";
import { ContentCenterWrapper } from "../../atoms/ContentCenterWrapper";

const stories = storiesOf("Organisms", module);

stories.addDecorator(story => <Router>{story()}</Router>);

stories.add(
  "SelectionSummary",
  withInfo()(() => (
    <ContentCenterWrapper>
      <SelectionSummary
        label="Selected Entry Type"
        selections="Army, Navy, AirForce"
        onChangeClickUrl="/welcome/1"
      />
    </ContentCenterWrapper>
  )),
);
