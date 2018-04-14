import { withInfo } from "@storybook/addon-info";
import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import { FormTooltip } from ".";

storiesOf("Molecules", module).add(
  "FormTooltip",
  withInfo()(() => (
    <div>
      <p>Sample the pop-in/pop-out animation using the Knobs tab.</p>

      <FormTooltip open={boolean("Open", true)} title="Some Error Message">
        <input />
      </FormTooltip>
    </div>
  )),
);
