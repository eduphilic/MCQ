import { withInfo } from "@storybook/addon-info";
import { selectV2 } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import { entryDict, EntryLogo } from ".";

storiesOf("Atoms", module).add(
  "EntryLogo",
  withInfo()(() => {
    const entries = Array.from(entryDict.keys());

    return (
      <div style={{ width: 200, height: 200 }}>
        <EntryLogo entry={selectV2("Entry", entries, "AirForce")} />
      </div>
    );
  }),
);
