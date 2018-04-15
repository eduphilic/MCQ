import { withInfo } from "@storybook/addon-info";
import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import { TextFieldTooltip } from ".";

storiesOf("Atoms", module).add(
  "TextFieldTooltip",
  withInfo()(() => (
    <div>
      <p>Sample the pop-in/pop-out animation using the Knobs tab.</p>

      <TextFieldTooltip open={boolean("Open", true)} title="Some Error Message">
        <input />
      </TextFieldTooltip>
    </div>
  )),
);
