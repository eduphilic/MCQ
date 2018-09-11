import React, { ReactNode, SFC } from "react";
import { connect } from "react-redux";
import { State } from "store";
import { actions } from "../../actions";
import { FeatureKey } from "../../types/FeatureKey";

import { BaseSwippableTemplate } from "../BaseSwippableTemplate";

import { ExamAppBarMobile } from "../ExamAppBarMobile";

type StateProps = {
  currentQuestion: number;
};

type DispatchProps = {
  onPaneChange: (questionIndex: number) => any;
};

type OwnProps = FeatureKey & {
  /**
   * Render a static view instead of a swipeable pane.
   */
  staticView?: ReactNode;

  /**
   * The swippable exam pages.
   */
  paneKeyNodeMap: { key: string; node: ReactNode }[];
};
export type ExamTemplateMobileProps = OwnProps;

type Props = StateProps & DispatchProps & OwnProps;

const ExamTemplateMobile: SFC<Props> = props => {
  const { staticView, paneKeyNodeMap, currentQuestion, onPaneChange } = props;

  const headerNode = <ExamAppBarMobile />;

  return (
    <BaseSwippableTemplate
      headerNode={headerNode}
      paneKeyNodeMap={paneKeyNodeMap}
      selectedPane={currentQuestion}
      onPaneChange={onPaneChange}
      staticView={staticView}
    />
  );
};

const ExamTemplateMobileContainer = connect<
  StateProps,
  DispatchProps,
  OwnProps,
  State
>(
  ({ examTaking }): StateProps => ({
    currentQuestion: examTaking.currentQuestion,
  }),
  {
    onPaneChange: actions.navigateToQuestion,
  },
)(ExamTemplateMobile);
export { ExamTemplateMobileContainer as ExamTemplateMobile };
