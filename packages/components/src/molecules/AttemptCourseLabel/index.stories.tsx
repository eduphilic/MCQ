import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React from "react";
import { AttemptCourseLabel } from ".";

storiesOf("Molecules", module).add(
  "AttemptCourseLabel",
  withInfo()(() => (
    <AttemptCourseLabel courseTitle="Soldier GD" passText="10th Pass" />
  )),
);
