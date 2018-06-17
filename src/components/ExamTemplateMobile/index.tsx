import React, { Component, ReactNode } from "react";

import { BaseSwippableTemplate } from "components/BaseSwippableTemplate";
import { ExamAppBarMobile } from "components/ExamAppBarMobile";

export interface ExamTemplateMobileProps {
  /**
   * Render a static view instead of a swipeable pane.
   */
  staticView?: ReactNode;
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
    const { staticView } = this.props;
    const { selectedPane } = this.state;

    const headerNode = <ExamAppBarMobile />;

    const paneKeyNodeMap = Array.from({ length: 16 }, (_item, index) => ({
      key: index.toString(),
      node: <div>{index}</div>,
    }));

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
