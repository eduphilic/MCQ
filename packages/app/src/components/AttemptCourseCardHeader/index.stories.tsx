import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React from "react";
import { AttemptCourseCardHeader } from ".";

storiesOf("Components", module).add(
  "AttemptCourseCardHeader",
  withInfo()(() => (
    <AttemptCourseCardHeader entry="Army" label="Army Mock Tests" />
  )),
);
