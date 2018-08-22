import { examPaneKeyNodeMap } from "common/structures/examPaneKeyNodeMap";
import { IExamMeta } from "features/exam-overview";
import React, { Component } from "react";
import { connect } from "react-redux";
import { State } from "store";
import { actions } from "./actions";

import { DashboardColumnContainer } from "componentsV0/DashboardColumnContainer";

import { ExamTakingTourModal } from "features/interface-tours";
import { ExamAnswerSelect } from "./components/ExamAnswerSelect";
import { examAnswerSelectPlaceholderProps } from "./components/ExamAnswerSelect/ExamAnswerSelect.placeholder";
import { ExamContents } from "./components/ExamContents";
import { examContentsPlaceholderProps } from "./components/ExamContents/ExamContents.placeholder";
import {
  ExamHeader,
  examHeaderPlaceholderProps,
} from "./components/ExamHeader";
import { ExamLayout } from "./components/ExamLayout";
import { ExamOverviewBluePrint } from "./components/ExamOverviewBluePrint";
import { ExamOverviewMarkings } from "./components/ExamOverviewMarkings";
import { ExamOverviewMobile } from "./components/ExamOverviewMobile";
import { ExamSubmissionSummary } from "./components/ExamSubmissionSummary";
import { examSubmissionSummaryPlaceholderProps } from "./components/ExamSubmissionSummary/ExamSubmissionSummary.placeholder";
import { ExamTemplate } from "./components/ExamTemplate";

interface StateProps {
  examMeta: IExamMeta | null;
  showOverviewScreen: boolean;
  showSubmissionSummaryScreen: boolean;
  currentQuestion: number;
}

interface DispatchProps {
  loadPlaceholderExam: () => void;
}

// tslint:disable-next-line:no-empty-interface
interface OwnProps {}

type ExamQuizPageProps = StateProps & DispatchProps & OwnProps;

class ExamQuizPage extends Component<ExamQuizPageProps> {
  constructor(props: ExamQuizPageProps) {
    super(props);

    props.loadPlaceholderExam();
  }

  render() {
    const {
      examMeta,
      showOverviewScreen,
      showSubmissionSummaryScreen,
      currentQuestion,
    } = this.props;

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
      <>
        <ExamTemplate
          staticView={
            showOverviewScreen ? (
              <ExamOverviewMobile />
            ) : showSubmissionSummaryScreen ? (
              <ExamSubmissionSummary
                {...examSubmissionSummaryPlaceholderProps}
              />
            ) : (
              undefined
            )
          }
          paneKeyNodeMap={paneKeyNodeMap}
        >
          {showOverviewScreen && (
            <DashboardColumnContainer>
              {[
                <ExamOverviewBluePrint key="blue-print" />,
                <ExamOverviewMarkings key="markings" />,
              ]}
            </DashboardColumnContainer>
          )}

          {showSubmissionSummaryScreen && (
            <ExamSubmissionSummary {...examSubmissionSummaryPlaceholderProps} />
          )}

          {!showOverviewScreen &&
            !showSubmissionSummaryScreen &&
            paneKeyNodeMap[currentQuestion].node}
        </ExamTemplate>

        {!showOverviewScreen &&
          !showSubmissionSummaryScreen && <ExamTakingTourModal />}
      </>
    );
  }
}

const ExamQuizPageContainer = connect<
  StateProps,
  DispatchProps,
  OwnProps,
  State
>(
  state => ({
    examMeta: state.examTaking.examMeta,
    showOverviewScreen: state.examTaking.showOverviewScreen,
    showSubmissionSummaryScreen: state.examTaking.showSubmissionSummaryScreen,
    currentQuestion: state.examTaking.currentQuestion,
  }),
  {
    loadPlaceholderExam: actions.loadPlaceholderExam,
  },
)(ExamQuizPage);

export { ExamQuizPageContainer as ExamQuizPage };
