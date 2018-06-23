import { storiesOf } from "@storybook/react";
import React from "react";

import { ExamHeader } from ".";
import { examHeaderPlaceholderProps } from "./examHeaderPlaceholderProps";

storiesOf("Exam Taking", module).add("ExamHeader", () => {
  //

  return <ExamHeader {...examHeaderPlaceholderProps} />;
});
