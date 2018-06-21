import React, { ReactNode, SFC } from "react";

import { BaseSwippableTemplate } from "components/BaseSwippableTemplate";
import {
  ExamAppBarMobile,
  ExamAppBarMobileProps,
} from "components/ExamAppBarMobile";
import { ExamNavigationStorePlaceholderConsumer } from "components/ExamNavigationStorePlaceholder";

export interface ExamTemplateMobileProps extends ExamAppBarMobileProps {
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
  const { staticView, paneKeyNodeMap, ...rest } = props;

  const headerNode = <ExamAppBarMobile {...rest} />;

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
