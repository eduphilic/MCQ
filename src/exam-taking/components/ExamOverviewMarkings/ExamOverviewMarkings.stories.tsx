import { storiesOf } from "@storybook/react";
import React from "react";

import { ContentCenterWrapper } from "components/ContentCenterWrapper";
import { ExamOverviewMarkings } from "./ExamOverviewMarkings";

export const markings = {
  totalMarks: 200,
  passingMarks: 150,
  totalTimeMinutes: 15,
  questionsCount: 20,
  marksPerCorrectAnswer: 3,
  marksPerIncorrectAnswer: 1,
};

storiesOf("Exam Taking", module).add("ExamOverviewMarkings", () => {
  //

  return (
    <div style={{ display: "flex", marginTop: 24 }}>
      <ContentCenterWrapper style={{ width: "50%" }}>
        <ExamOverviewMarkings markings={markings} />
      </ContentCenterWrapper>
    </div>
  );
});
