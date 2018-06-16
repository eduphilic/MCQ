import React, { SFC } from "react";

import { DashboardColumnContainer } from "components/DashboardColumnContainer";
import { ExamBluePrint } from "components/ExamBluePrint";
import { ExamNavigationStorePlaceholderConsumer } from "components/ExamNavigationStorePlaceholder";
import { ExamTemplate } from "components/ExamTemplate";

export const ExamQuiz: SFC<{}> = () => {
  return (
    <ExamNavigationStorePlaceholderConsumer>
      {({ page }) => (
        <ExamTemplate>
          {page === "overview" && (
            <DashboardColumnContainer>
              {[<ExamBluePrint key="blue-print" />]}
            </DashboardColumnContainer>
          )}
        </ExamTemplate>
      )}
    </ExamNavigationStorePlaceholderConsumer>
  );
};
