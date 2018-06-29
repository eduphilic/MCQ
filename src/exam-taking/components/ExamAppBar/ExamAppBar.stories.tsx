import { storiesOf } from "@storybook/react";
import React from "react";

import { ExamAppBar } from "./ExamAppBar";

storiesOf("Exam Taking", module).add("ExamAppBar", () => {
  //

  return <ExamAppBar showStartExamButton />;
});
