import { ExamTemplate } from "features/exam-taking";
import React from "react";

const paneKeyNodeMap = Array.from({ length: 15 }, (_, index) => ({
  key: `pane-${index}`,
  node: <div>Pane Node</div>,
}));

export const ExamReviewPage = () => (
  <ExamTemplate paneKeyNodeMap={paneKeyNodeMap} featureKey="examReview">
    {paneKeyNodeMap[0].node}
  </ExamTemplate>
);
