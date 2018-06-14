import React, { Component, createRef, ReactNode } from "react";
import ReactSwipe from "react-swipe";
import styled from "styled";

export interface BaseSwippableTemplateProps {
  /**
   * Header node. Used for the app bar.
   */
  headerNode: ReactNode;

  /**
   * Content panes, in the order of appearance.
   */
  paneKeyNodeMap: { key: string; node: ReactNode }[];

  /**
   * Footer node. Used to display a bottom navigation.
   */
  footerNode?: ReactNode;

  /**
   * Pane to display.
   *
   * As part of page navigation, this will be set to the index corresponding to
   * the current page url.
   *
   * As part of the exam screen, this will be set to the question currently
   * being viewed.
   */
  selectedPane?: number;

  onPaneChange?: (paneIndex: number) => any;
}

/**
 * Provides a vertical layout with app bar, swippable panes, and optional bottom
 * navigation bar. This serves as a common base type to page navigation by
 * swiping or navigation amount items.
 */
export class BaseSwippableTemplate extends Component<
  BaseSwippableTemplateProps
> {
  private reactSwipeRef = createRef<ReactSwipe>();

  render() {
    const {
      headerNode,
      paneKeyNodeMap,
      footerNode,
      selectedPane,
      onPaneChange,
    } = this.props;

    const panes = paneKeyNodeMap.map(({ key, node }) => (
      <Pane key={key}>{node}</Pane>
    ));

    return (
      <Wrapper>
        {headerNode}

        <ReactSwipeFlexGrow
          innerRef={this.reactSwipeRef}
          swipeOptions={{
            continuous: false,
            startSlide: selectedPane,
            transitionEnd: onPaneChange,
          }}
        >
          {panes}
        </ReactSwipeFlexGrow>

        {footerNode}
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const ReactSwipeFlexGrow = styled(ReactSwipe)`
  flex: 1;

  > div {
    height: 100%;
  }
`;

const Pane = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;

  & > * {
    margin-top: ${({ theme }) => theme.spacing.unit * 2}px;
  }

  & > *:last-child {
    margin-bottom: ${({ theme }) => theme.spacing.unit * 2}px;
  }
`;
