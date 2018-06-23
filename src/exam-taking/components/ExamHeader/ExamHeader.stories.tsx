import { storiesOf } from "@storybook/react";
import React from "react";

import { ExamHeader } from "./";
import { examHeaderPlaceholderProps } from "./ExamHeader.placeholder";

storiesOf("Exam Taking", module).add("ExamHeader", () => {
  //

  return <ExamHeader {...examHeaderPlaceholderProps} />;
});
