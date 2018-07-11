import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React from "react";

import { createPlaceholderExamQuantitySelectorProps } from "./createPlaceholderExamQuantitySelectorProps";
import { ExamQuantitySelector } from "./ExamQuantitySelector";

storiesOf("Dashboard", module).add(
  "ExamQuantitySelector",
  withInfo()(() => {
    const props = createPlaceholderExamQuantitySelectorProps();

    return <ExamQuantitySelector {...props} />;
  }),
);
