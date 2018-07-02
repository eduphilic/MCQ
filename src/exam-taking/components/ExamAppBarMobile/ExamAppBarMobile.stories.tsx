import { storiesOf } from "@storybook/react";
import React from "react";

import { PlaceholderProvider } from "../../placeholders/PlaceholderProvider";
import { ExamAppBarMobile } from "./ExamAppBarMobile";

storiesOf("Exam Taking", module).add("ExamAppBarMobile", () => {
  //

  return (
    <PlaceholderProvider>
      <ExamAppBarMobile />
    </PlaceholderProvider>
  );
});
