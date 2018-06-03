import { withInfo } from "@storybook/addon-info";
import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import { Step } from ".";

storiesOf("Components", module).add(
  "Step",
  withInfo()(() => (
    <Step
      stepNumber={1}
      label="Select Entry Type"
      visited={boolean("Visited", true)}
    />
  )),
);
