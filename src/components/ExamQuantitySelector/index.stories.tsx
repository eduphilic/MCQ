import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React from "react";
import { ExamQuantitySelector } from ".";
import { createPlaceholderExamQuantitySelectorProps } from "./createPlaceholderExamQuantitySelectorProps";

storiesOf("Components", module).add(
  "ExamQuantitySelector",
  withInfo()(() => {
    const props = createPlaceholderExamQuantitySelectorProps();

    return <ExamQuantitySelector {...props} />;
  }),
);
