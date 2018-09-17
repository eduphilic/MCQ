import {
  ExamAnswerSelect,
  examAnswerSelectPlaceholderProps,
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
          answerNode={
            <ExamAnswerSelect {...examAnswerSelectPlaceholderProps} />
          }
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
