import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { array } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import { SideSheetButtonMenu } from ".";

storiesOf("Components", module).add(
  "SideSheetButtonMenu",
  withInfo()(() => {
    //

    return (
      <div style={{ width: 300, margin: "0 auto", backgroundColor: "#fff" }}>
        <SideSheetButtonMenu
          options={array("Options", [
            "Single Choice",
            "Multiple Choice",
            "Subjective",
          ])}
          value="Single Choice"
          onChange={action("onChange")}
        />
      </div>
    );
  }),
);
