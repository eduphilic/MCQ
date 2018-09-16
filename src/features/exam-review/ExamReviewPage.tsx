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
import React from "react";

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

export const ExamReviewPage = () => (
  <ExamTemplate paneKeyNodeMap={paneKeyNodeMap} featureKey="examReview">
    {paneKeyNodeMap[0].node}
  </ExamTemplate>
);
