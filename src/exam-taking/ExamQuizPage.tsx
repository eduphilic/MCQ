import { examPaneKeyNodeMap } from "common/structures/examPaneKeyNodeMap";
import React, { SFC } from "react";

import { DashboardColumnContainer } from "components/DashboardColumnContainer";
import { ExamOverviewBluePrint } from "components/ExamOverviewBluePrint";
import { ExamOverviewMarkings } from "components/ExamOverviewMarkings";
import { ExamOverviewMobile } from "components/ExamOverviewMobile";
import { ExamTemplate } from "components/ExamTemplate";

import { ExamAnswerSelect } from "./components/ExamAnswerSelect";
import { examAnswerSelectPlaceholderProps } from "./components/ExamAnswerSelect/ExamAnswerSelect.placeholder";
import { ExamContents } from "./components/ExamContents";
import { examContentsPlaceholderProps } from "./components/ExamContents/ExamContents.placeholder";
import {
  ExamHeader,
  examHeaderPlaceholderProps,
} from "./components/ExamHeader";
import { ExamLayout } from "./components/ExamLayout";
import { ExamSubmissionSummary } from "./components/ExamSubmissionSummary";
import { examSubmissionSummaryPlaceholderProps } from "./components/ExamSubmissionSummary/ExamSubmissionSummary.placeholder";
import {
  ExamNavigationStorePlaceholderConsumer,
  ExamNavigationStorePlaceholderProvider,
} from "./ExamNavigationStorePlaceholder";

export const ExamQuizPage: SFC<{}> = () => {
  const paneKeyNodeMap = examPaneKeyNodeMap.map((pane, index) => ({
    key: pane.key,
    node: (
      <ExamLayout
        headerNode={
          <ExamHeader
            {...{
              ...examHeaderPlaceholderProps,
              question: `Q${index +
                1}. ${examHeaderPlaceholderProps.question.slice(4)}`,
            }}
          />
        }
        contentsNode={
          <ExamContents
            {...examContentsPlaceholderProps}
            answerNode={
              <ExamAnswerSelect {...examAnswerSelectPlaceholderProps} />
            }
          />
        }
      />
    ),
  }));

  return (
    <ExamNavigationStorePlaceholderProvider>
      <ExamNavigationStorePlaceholderConsumer>
        {({ showOverviewPage, showSubmissionSummaryPage, currentQuestion }) => (
          <ExamTemplate
            staticView={showOverviewPage ? <ExamOverviewMobile /> : undefined}
            paneKeyNodeMap={paneKeyNodeMap}
          >
            {showOverviewPage && (
              <DashboardColumnContainer>
                {[
                  <ExamOverviewBluePrint key="blue-print" />,
                  <ExamOverviewMarkings key="markings" />,
                ]}
              </DashboardColumnContainer>
            )}

            {showSubmissionSummaryPage && (
              <ExamSubmissionSummary
                {...examSubmissionSummaryPlaceholderProps}
              />
            )}

            {!showOverviewPage &&
              !showSubmissionSummaryPage &&
              paneKeyNodeMap[currentQuestion].node}
          </ExamTemplate>
        )}
      </ExamNavigationStorePlaceholderConsumer>
    </ExamNavigationStorePlaceholderProvider>
  );
};
