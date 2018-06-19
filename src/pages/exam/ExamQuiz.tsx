import { examPaneKeyNodeMap } from "common/structures/examPaneKeyNodeMap";
import React, { SFC } from "react";

import { DashboardColumnContainer } from "components/DashboardColumnContainer";
import { ExamNavigationStorePlaceholderConsumer } from "components/ExamNavigationStorePlaceholder";
import { ExamOverviewBluePrint } from "components/ExamOverviewBluePrint";
import { ExamOverviewMarkings } from "components/ExamOverviewMarkings";
import { ExamOverviewMobile } from "components/ExamOverviewMobile";
import { ExamTemplate } from "components/ExamTemplate";

export const ExamQuiz: SFC<{}> = () => {
  const paneKeyNodeMap = examPaneKeyNodeMap;

  return (
    <ExamNavigationStorePlaceholderConsumer>
      {({ page }) => (
        <ExamTemplate
          staticView={page === "overview" ? <ExamOverviewMobile /> : undefined}
          paneKeyNodeMap={paneKeyNodeMap}
        >
          {page === "overview" ? (
            <DashboardColumnContainer>
              {[
                <ExamOverviewBluePrint key="blue-print" />,
                <ExamOverviewMarkings key="markings" />,
              ]}
            </DashboardColumnContainer>
          ) : (
            paneKeyNodeMap[page].node
          )}
        </ExamTemplate>
      )}
    </ExamNavigationStorePlaceholderConsumer>
  );
};
