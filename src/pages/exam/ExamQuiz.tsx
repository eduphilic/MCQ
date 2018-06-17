import React, { SFC } from "react";

import { DashboardColumnContainer } from "components/DashboardColumnContainer";
import { ExamNavigationStorePlaceholderConsumer } from "components/ExamNavigationStorePlaceholder";
import { ExamOverviewBluePrint } from "components/ExamOverviewBluePrint";
import { ExamOverviewMarkings } from "components/ExamOverviewMarkings";
import { ExamOverviewMobile } from "components/ExamOverviewMobile";
import { ExamTemplate } from "components/ExamTemplate";

export const ExamQuiz: SFC<{}> = () => {
  return (
    <ExamNavigationStorePlaceholderConsumer>
      {({ page }) => (
        <ExamTemplate
          staticView={page === "overview" ? <ExamOverviewMobile /> : undefined}
        >
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
