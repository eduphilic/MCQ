import React, { SFC } from "react";

import { ExamNavigationStorePlaceholderConsumer } from "components/ExamNavigationStorePlaceholder";
import { ExamTemplate } from "components/ExamTemplate";

export const ExamQuiz: SFC<{}> = () => {
  return (
    <ExamNavigationStorePlaceholderConsumer>
      {() => <ExamTemplate />}
    </ExamNavigationStorePlaceholderConsumer>
  );
};
