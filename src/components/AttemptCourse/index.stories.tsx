import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React from "react";
import { AttemptCourse } from ".";

storiesOf("Components", module).add(
  "AttemptCourse",
  withInfo()(() => (
    <div style={{ width: 300, border: "1px solid #eee" }}>
      <AttemptCourse
        courseTitle="Soldier GD"
        passText="10th Pass"
        onClick={action("onClick")}
      />
    </div>
  )),
);
