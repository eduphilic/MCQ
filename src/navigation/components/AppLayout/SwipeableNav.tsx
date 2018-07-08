import { bottomNavBoxShadow } from "css";
import { strings } from "localization";
import React, { Component } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import SwipeableViews, { SwipeableViewsProps } from "react-swipeable-views";
import styled from "styled";
import { INavigationLink } from "../../models/INavigationLink";

import BottomNavigation, {
  BottomNavigationProps,
} from "@material-ui/core/BottomNavigation";
import BottomNavigationAction, {
  BottomNavigationActionProps,
} from "@material-ui/core/BottomNavigationAction";
import Paper from "@material-ui/core/Paper";

import { NavTheme } from "./NavTheme";

type OwnProps = {
  links: INavigationLink[];
};
export { OwnProps as SwipeableNavProps };

type Props = RouteComponentProps<{}> & OwnProps;

class SwipeableNav extends Component<Props> {
  private readonly scrollTopClass = "swipeable-views-scroll-top";

  render() {
    const { links, location } = this.props;
    const paneIndex = this.getPaneIndexFromCurrentRoute();

    return (
      <Wrapper>
        {/* Place bottom navigation first so shadow overlaps swipe panes. */}
        <NavTheme>
          <StyledBottomNavigation
            value={location.pathname}
            onChange={this.handleBottomNavigationButtonClick}
          >
            {links.map(l => (
              <StyledBottomNavigationAction
                key={l.titleLocalizationKey}
                icon={l.iconElement}
                value={l.to}
                label={strings[l.titleLocalizationKey]}
              />
            ))}
          </StyledBottomNavigation>
        </NavTheme>

        <StyledSwipeableViews
          className={this.scrollTopClass}
          index={paneIndex}
          onChangeIndex={this.handlePaneChange}
        >
          {links.map(({ component: PaneComponent, titleLocalizationKey }) => (
            <PaneComponent key={titleLocalizationKey} />
          ))}
        </StyledSwipeableViews>
      </Wrapper>
    );
  }

  private handleBottomNavigationButtonClick = (_e: any, pathname: string) => {
    const { history } = this.props;
    history.push(pathname);
  };

  private handlePaneChange = (paneIndex: number) => {
    const { links } = this.props;

    // Scroll the pane to the top on swipe completion.
    const swipeContainerDiv = document.querySelector<HTMLDivElement>(
      `.${this.scrollTopClass}`,
    )!;
    swipeContainerDiv.scrollTop = 0;

    this.pushRouteToHistory(links[paneIndex].to);
  };

  private pushRouteToHistory = (pathname: string) => {
    const { history } = this.props;

    // Delay changing page URL so that swipe animation has time to complete.
    // Default swipe animation duration is 0.3 seconds.
    setTimeout(() => {
      history.push(pathname);
    }, 350);
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

const SwipeableNavWithRouter = withRouter(SwipeableNav);
export { SwipeableNavWithRouter as SwipeableNav };

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const StyledSwipeableViews = styled<Omit<SwipeableViewsProps, "ref">>(props => (
  <SwipeableViews {...props} />
))`
  height: calc(100% - 56px);
  background-color: #fff;

  /* Enable Momentum Scrolling on iOS */
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
`;

const StyledBottomNavigation = styled<BottomNavigationProps>(props => (
  <StyledPaper>
    <BottomNavigation showLabels {...props} />
  </StyledPaper>
))`
  background-color: ${({ theme }) => theme.palette.background.default};
`;

const StyledPaper = styled(Paper)`
  ${bottomNavBoxShadow};
  order: 2;
  z-index: 1;
`;

const StyledBottomNavigationAction = styled<BottomNavigationActionProps>(
  ({ classes, ...rest }) => (
    <BottomNavigationAction
      classes={{
        ...classes,
        label: "label",
        selected: "selected",
      }}
      {...rest}
    />
  ),
)`
  color: rgba(255, 255, 255, 0.45);

  &.selected {
    color: ${({ theme }) => theme.palette.primary.contrastText};
  }

  .label {
    white-space: nowrap;
    overflow: hidden;
  }
`;
