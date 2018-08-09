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
   * Animation duration of slide when the prop "selectedPane" changes. Value is
   * in milliseconds.
   *
   * @default 250
   */
  slideAnimationDuration?: number;

  /**
   * Pane to display.
   *
   * As part of page navigation, this will be set to the index corresponding to
   * the current page url.
   *
   * As part of the exam screen, this will be set to the question currently
   * being viewed.
   */
  selectedPane: number;

  /**
   * Called when the user slides from one pane to another.
   */
  onPaneChange: (paneIndex: number) => any;

  /**
   * A static view to render in place of the swipe container. When it is
   * provided, the swipe behavior is disabled and this component is rendered
   * instead of the panes.
   */
  staticView?: ReactNode;
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

  componentDidUpdate(prevProps: BaseSwippableTemplateProps) {
    const { slideAnimationDuration, selectedPane } = this.props;

    if (selectedPane === undefined || selectedPane === prevProps.selectedPane) {
      return;
    }

    if (!this.reactSwipeRef.current) return;

    this.reactSwipeRef.current.slide(
      selectedPane,
      slideAnimationDuration === undefined ? 250 : slideAnimationDuration,
    );
  }

  render() {
    const {
      headerNode,
      paneKeyNodeMap,
      footerNode,
      selectedPane,
      onPaneChange,
      staticView,
    } = this.props;

    const panes = paneKeyNodeMap.map(({ key, node }) => (
      <Pane key={key}>{node}</Pane>
    ));

    return (
      <Wrapper>
        {headerNode}

        {staticView ? (
          <StaticViewWrapper>{staticView}</StaticViewWrapper>
        ) : (
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
        )}

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
  background-color: ${({ theme }) => theme.palette.background.paper};
`;

const StaticViewWrapper = styled.div`
  /* flex: 1; */
  overflow-y: auto;
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
