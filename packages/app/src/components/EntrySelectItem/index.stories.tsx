import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import { EntrySelectItem } from ".";

storiesOf("Components", module).add(
  "EntrySelectItem",
  withInfo()(() => (
    <div style={{ width: 320, margin: 16 }}>
      <EntrySelectItem
        icon="AirForce"
        label="AirForce"
        selected={boolean("Selected", false)}
        onClick={action("onClick")}
      />
      <div style={{ marginTop: 8 }} />
      <EntrySelectItem
        icon="AirForce"
        label="AirForce"
        additionalDescriptionText="12th Science with Maths"
        selected={boolean("Selected", false)}
        onClick={action("onClick")}
      />
    </div>
  )),
);
