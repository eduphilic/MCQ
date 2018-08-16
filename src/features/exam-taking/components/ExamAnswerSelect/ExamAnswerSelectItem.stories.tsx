import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import { StorybookContentCenterWrapper } from "components/storybook/StorybookContentCenterWrapper";
import { ExamAnswerSelectItem } from "./ExamAnswerSelectItem";

storiesOf("Exam Taking", module).add("ExamAnswerSelectItem", () => {
  //

  return (
    <StorybookContentCenterWrapper maxWidthPercent={50}>
      <ExamAnswerSelectItem
        answerLabel="Lat"
        answerIndex={0}
        selected={boolean("Selected", true)}
        onClick={action("onClick")}
      />
    </StorybookContentCenterWrapper>
  );
});
