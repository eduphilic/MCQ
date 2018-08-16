import { storiesOf } from "@storybook/react";
import React from "react";

import { StorybookContentCenterWrapper } from "components/storybook/StorybookContentCenterWrapper";
import { ExamHeader } from "./";
import { examHeaderPlaceholderProps } from "./ExamHeader.placeholder";

storiesOf("Exam Taking", module).add("ExamHeader", () => {
  //

  return (
    <StorybookContentCenterWrapper>
      <ExamHeader {...examHeaderPlaceholderProps} />
    </StorybookContentCenterWrapper>
  );
});
