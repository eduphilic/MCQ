import React, { SFC } from "react";

import { DashboardColumnContainer } from "components/DashboardColumnContainer";
import { ExamNavigationStorePlaceholderConsumer } from "components/ExamNavigationStorePlaceholder";
import { ExamOverviewBluePrint } from "components/ExamOverviewBluePrint";
import { ExamOverviewMarkings } from "components/ExamOverviewMarkings";
import { ExamTemplate } from "components/ExamTemplate";

export const ExamQuiz: SFC<{}> = () => {
  return (
    <ExamNavigationStorePlaceholderConsumer>
      {({ page }) => (
        <ExamTemplate>
          {page === "overview" && (
            <DashboardColumnContainer>
              {[
                <ExamOverviewBluePrint key="blue-print" />,
                <ExamOverviewMarkings key="markings" />,
              ]}
            </DashboardColumnContainer>
          )}
        </ExamTemplate>
      )}
    </ExamNavigationStorePlaceholderConsumer>
  );
};
