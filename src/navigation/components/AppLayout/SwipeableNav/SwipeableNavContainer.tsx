import React, { Component } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { INavigationLink } from "../../../models/INavigationLink";

import { SwipeableNav } from "./SwipeableNav";

type OwnProps = {
  links: INavigationLink[];
};
export { OwnProps as SwipeableNavProps };

type Props = RouteComponentProps<{}> & OwnProps;

class SwipeableNavContainer extends Component<Props> {
  private readonly scrollTopClass = "swipeable-views-scroll-top";

  render() {
    const { links, location } = this.props;
    const paneIndex = this.getPaneIndexFromCurrentRoute();

    return (
      <SwipeableNav
        links={links}
        bottomNavigationValue={location.pathname}
        swipeableViewsClassName={this.scrollTopClass}
        swipeableViewsPaneIndex={paneIndex}
        onBottomNavigationChange={this.handleBottomNavigationButtonClick}
        onSwipeableViewsChangeIndex={this.handlePaneChange}
      />
    );
  }

  private handleBottomNavigationButtonClick = (_e: any, pathname: string) => {
    const { history } = this.props;
    history.push(pathname);
  };

  private handlePaneChange = (paneIndex: number) => {
    const { links } = this.props;

    this.pushRouteToHistory(links[paneIndex].to);
    this.scrollTop();
  };

  private scrollTop = () => {
    // Scroll the pane to the top on swipe completion.
    const swipeContainerDiv = document.querySelector<HTMLDivElement>(
      `.${this.scrollTopClass}`,
    )!;
    swipeContainerDiv.scrollTop = 0;
  };

  private pushRouteToHistory = (pathname: string) => {
    const { history } = this.props;

    history.push(pathname);
  };

  private getPaneIndexFromRoute = (pathname: string): number => {
    const { links } = this.props;
    const matchedLinkIndex = links.findIndex(l => l.to === pathname);
    const paneIndex = matchedLinkIndex > -1 ? matchedLinkIndex : 0;
    return paneIndex;
  };

  private getPaneIndexFromCurrentRoute = (): number => {
    const { location } = this.props;
    return this.getPaneIndexFromRoute(location.pathname);
  };
}

const SwipeableNavContainerWithRouter = withRouter(SwipeableNavContainer);
export { SwipeableNavContainerWithRouter as SwipeableNav };
