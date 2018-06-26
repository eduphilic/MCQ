import { examPaneKeyNodeMap } from "common/structures/examPaneKeyNodeMap";
import React, { SFC } from "react";

import { DashboardColumnContainer } from "components/DashboardColumnContainer";
import { ExamNavigationStorePlaceholderConsumer } from "components/ExamNavigationStorePlaceholder";
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
    <ExamNavigationStorePlaceholderConsumer>
      {({ showOverviewPage, currentQuestion }) => (
        <ExamTemplate
          staticView={showOverviewPage ? <ExamOverviewMobile /> : undefined}
          paneKeyNodeMap={paneKeyNodeMap}
        >
          {showOverviewPage ? (
            <DashboardColumnContainer>
              {[
                <ExamOverviewBluePrint key="blue-print" />,
                <ExamOverviewMarkings key="markings" />,
              ]}
            </DashboardColumnContainer>
          ) : (
            paneKeyNodeMap[currentQuestion].node
          )}
        </ExamTemplate>
      )}
    </ExamNavigationStorePlaceholderConsumer>
  );
};
