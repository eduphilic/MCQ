import { withInfo } from "@storybook/addon-info";
import { selectV2 } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import { entryImages } from "common/structures/entryImages";
import React from "react";

import { EntryLogo } from ".";

storiesOf("Components", module).add(
  "EntryLogo",
  withInfo()(() => {
    const entries = Object.keys(entryImages) as (keyof typeof entryImages)[];

    return (
      <div style={{ width: 200, height: 200 }}>
        <EntryLogo entry={selectV2("Entry", entries, "AirForce")} />
      </div>
    );
  }),
);
