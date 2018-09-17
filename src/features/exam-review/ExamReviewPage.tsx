import {
  ExamAnswerSelect,
  examAnswerSelectPlaceholderProps,
  ExamAnswerSelectProps,
  ExamContents,
  examContentsPlaceholderProps,
  ExamHeader,
  examHeaderPlaceholderProps,
  ExamLayout,
  ExamTemplate,
} from "features/exam-taking";
import React, { SFC } from "react";
import { connect } from "react-redux";
import { State } from "store";

const examAnswerSelectProps: ExamAnswerSelectProps = {
  ...examAnswerSelectPlaceholderProps,
  areClickable: false,
  correctAnswerIndex: 2,
};

const paneKeyNodeMap = Array.from({ length: 15 }, (_, index) => ({
  key: `pane-${index}`,
  node: (
    <ExamLayout
      headerNode={
        <ExamHeader
          questionNumber={index + 1}
          {...examHeaderPlaceholderProps}
        />
      }
      contentsNode={
        <ExamContents
          {...examContentsPlaceholderProps}
          answerNode={<ExamAnswerSelect {...examAnswerSelectProps} />}
        />
      }
    />
  ),
}));

export type ExamReviewPageProps = {
  currentQuestion: number;
};

const ExamReviewPage: SFC<ExamReviewPageProps> = props => {
  const { currentQuestion } = props;

  return (
    <ExamTemplate paneKeyNodeMap={paneKeyNodeMap} featureKey="examReview">
      {paneKeyNodeMap[currentQuestion].node}
    </ExamTemplate>
  );
};

const ExamReviewPageContainer = connect((state: State) => ({
  currentQuestion: state.examReview.currentQuestion,
}))(ExamReviewPage);
export { ExamReviewPageContainer as ExamReviewPage };
