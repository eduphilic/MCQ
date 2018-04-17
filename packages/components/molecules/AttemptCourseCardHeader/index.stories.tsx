import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React from "react";
import { AttemptCourseCardHeader } from ".";

storiesOf("Molecules", module).add(
  "AttemptCourseCardHeader",
  withInfo()(() => (
    <AttemptCourseCardHeader
      image="https://via.placeholder.com/160x120?text=Service%20Branch"
      label="Army Mock Tests"
    />
  )),
);
