import React, { ReactNode, SFC } from "react";

import { BaseSwippableTemplate } from "components/BaseSwippableTemplate";

import { ExamNavigationStorePlaceholderConsumer } from "../../ExamNavigationStorePlaceholder";
import { ExamAppBarMobile } from "../ExamAppBarMobile";

export interface ExamTemplateMobileProps {
  /**
   * Render a static view instead of a swipeable pane.
   */
  staticView?: ReactNode;

  /**
   * The swippable exam pages.
   */
  paneKeyNodeMap: { key: string; node: ReactNode }[];
}

export const ExamTemplateMobile: SFC<ExamTemplateMobileProps> = props => {
  const { staticView, paneKeyNodeMap } = props;

  const headerNode = <ExamAppBarMobile />;

  return (
    <ExamNavigationStorePlaceholderConsumer>
      {store => (
        <BaseSwippableTemplate
          headerNode={headerNode}
          paneKeyNodeMap={paneKeyNodeMap}
          selectedPane={store.currentQuestion}
          onPaneChange={store.navigateToQuestion}
          staticView={staticView}
        />
      )}
    </ExamNavigationStorePlaceholderConsumer>
  );
};
