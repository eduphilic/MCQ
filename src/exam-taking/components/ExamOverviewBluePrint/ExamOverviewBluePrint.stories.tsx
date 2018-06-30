import { storiesOf } from "@storybook/react";
import React from "react";
import { IExamMetaSubject } from "../../models/IExamMetaSubject";

import { ContentCenterWrapper } from "components/ContentCenterWrapper";
import { ExamOverviewBluePrint } from "./ExamOverviewBluePrint";

export const subjects: IExamMetaSubject[] = [
  "General Knowledge",
  "General Knowledge",
  "English 1",
  "History",
  "Geography",
  "Political Science",
  "General Knowledge 2",
  "World War 1",
  "Global Warming",
  "Pollution",
].map((t, index) => ({
  id: `${t}-${index}`,
  title: { en: t },
  questionCount: 50,
  marksAllocated: 150,
}));

storiesOf("Exam Taking", module).add("ExamOverviewBluePrint", () => {
  //

  return (
    <ContentCenterWrapper style={{ display: "flex", marginTop: 24 }}>
      <ExamOverviewBluePrint subjects={subjects} />
      <div style={{ width: "50%" }} />
    </ContentCenterWrapper>
  );
});
