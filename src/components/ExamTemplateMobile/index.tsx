import React, { Component, ReactNode } from "react";

import { BaseSwippableTemplate } from "components/BaseSwippableTemplate";
import {
  ExamAppBarMobile,
  ExamAppBarMobileProps,
} from "components/ExamAppBarMobile";

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

interface ExamTemplateMobileState {
  selectedPane: number;
}

export class ExamTemplateMobile extends Component<
  ExamTemplateMobileProps,
  ExamTemplateMobileState
> {
  state: ExamTemplateMobileState = {
    selectedPane: 0,
  };

  private handlePaneSwipe = (paneIndex: number) =>
    this.setState({ selectedPane: paneIndex });

  render() {
    const { staticView, paneKeyNodeMap, ...rest } = this.props;
    const { selectedPane } = this.state;

    const headerNode = <ExamAppBarMobile {...rest} />;

    return (
      <BaseSwippableTemplate
        headerNode={headerNode}
        paneKeyNodeMap={paneKeyNodeMap}
        selectedPane={selectedPane}
        onPaneChange={this.handlePaneSwipe}
        staticView={staticView}
      />
    );
  }
}
