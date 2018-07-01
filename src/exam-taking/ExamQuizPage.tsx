import { examPaneKeyNodeMap } from "common/structures/examPaneKeyNodeMap";
import React, { Component } from "react";
import { connect, DispatchProp } from "react-redux";
import { State } from "store";
import { actions } from "./actions";
import { IExamMeta } from "./models/IExamMeta";

import { DashboardColumnContainer } from "components/DashboardColumnContainer";

import { ExamAnswerSelect } from "./components/ExamAnswerSelect";
import { examAnswerSelectPlaceholderProps } from "./components/ExamAnswerSelect/ExamAnswerSelect.placeholder";
import { ExamContents } from "./components/ExamContents";
import { examContentsPlaceholderProps } from "./components/ExamContents/ExamContents.placeholder";
import {
  ExamHeader,
  examHeaderPlaceholderProps,
} from "./components/ExamHeader";
import { ExamLayout } from "./components/ExamLayout";
import { ExamOverviewBluePrintContainer } from "./components/ExamOverviewBluePrint";
import { ExamOverviewMarkingsContainer } from "./components/ExamOverviewMarkings";
import { ExamOverviewMobileContainer } from "./components/ExamOverviewMobile";
import { ExamSubmissionSummary } from "./components/ExamSubmissionSummary";
import { examSubmissionSummaryPlaceholderProps } from "./components/ExamSubmissionSummary/ExamSubmissionSummary.placeholder";
import { ExamTemplate } from "./components/ExamTemplate";
import {
  ExamNavigationStorePlaceholderConsumer,
  ExamNavigationStorePlaceholderProvider,
} from "./ExamNavigationStorePlaceholder";

type StoreProps = DispatchProp & {
  examMeta: IExamMeta | null;
};

class ExamQuizPage extends Component<StoreProps> {
  constructor(props: StoreProps) {
    super(props);

    props.dispatch(actions.loadPlaceholderExam());
  }

  render() {
    const { examMeta } = this.props;

    if (!examMeta) return null;

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
          {({
            showOverviewPage,
            showSubmissionSummaryPage,
            currentQuestion,
          }) => (
            <ExamTemplate
              staticView={
                showOverviewPage ? (
                  <ExamOverviewMobileContainer />
                ) : showSubmissionSummaryPage ? (
                  <ExamSubmissionSummary
                    {...examSubmissionSummaryPlaceholderProps}
                  />
                ) : (
                  undefined
                )
              }
              paneKeyNodeMap={paneKeyNodeMap}
            >
              {showOverviewPage && (
                <DashboardColumnContainer>
                  {[
                    <ExamOverviewBluePrintContainer key="blue-print" />,
                    <ExamOverviewMarkingsContainer key="markings" />,
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
  }
}

const ExamQuizPageContainer = connect((state: State) => ({
  examMeta: state.examTaking.examMeta,
}))(ExamQuizPage);

export { ExamQuizPageContainer as ExamQuizPage };
