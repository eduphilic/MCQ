import { NavigationLinks } from "common/types/NavigationLinks";
import strings from "l10n";
import React, { ChangeEvent, Component, createRef, ReactNode } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import ReactSwipe from "react-swipe";
import styled from "styled";

import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

import { DashboardTemplateProps } from "../DashboardTemplate";

export interface DashboardTemplateMobileProps
  extends Omit<DashboardTemplateProps, "children" | "drawerContentsNode">,
    RouteComponentProps<{}> {
  /**
   * Links to render on the bottom navigation.
   */
  links: NavigationLinks;
}

/**
 * Provides a mobile user dashboard template. It features a bottom navigation
 * component and allows navigation using left and right swipe gestures.
 */
class DashboardTemplateMobile extends Component<DashboardTemplateMobileProps> {
  private reactSwipe = createRef<ReactSwipe>();

  private handleSwipe = (paneIndex: number) => {
    const { links, history } = this.props;
    history.push(links[paneIndex].to);
  };

  private getPaneIndexFromRoute = (routerPath?: string) => {
    const { links, history } = this.props;

    const matchPath = routerPath || history.location.pathname;

    const paneIndex = links.findIndex(l => l.to === matchPath);
    return paneIndex;
  };

  private handleBottomNavigationChange = (
    _e: ChangeEvent<{}>,
    value: string,
  ) => {
    const paneIndex = this.getPaneIndexFromRoute(value);
    this.reactSwipe.current!.slide(
      paneIndex,
      250 /* Transition duration time of button ripple animation*/,
    );
  };

  render() {
    const { appBarNode, links, location } = this.props;

    const panes: ReactNode[] = [];
    const bottomNavigationActions: ReactNode[] = [];

    links.forEach(l => {
      const { titleLocalizationKey, to, iconElement } = l;
      const PaneComponent = l.component;

      panes.push(
        <Pane key={titleLocalizationKey}>
          <PaneComponent />
        </Pane>,
      );

      bottomNavigationActions.push(
        <BottomNavigationActionNoTextWrap
          key={titleLocalizationKey}
          icon={iconElement}
          value={to}
          label={strings[titleLocalizationKey]}
        />,
      );
    });

    return (
      <Wrapper>
        {appBarNode}

        <ReactSwipeFlexGrow
          innerRef={this.reactSwipe}
          swipeOptions={{
            continuous: false,
            startSlide: this.getPaneIndexFromRoute(),
            transitionEnd: this.handleSwipe,
          }}
        >
          {panes}
        </ReactSwipeFlexGrow>

        <BottomNavigation
          showLabels
          value={location.pathname}
          onChange={this.handleBottomNavigationChange}
        >
          {bottomNavigationActions}
        </BottomNavigation>
      </Wrapper>
    );
  }
}

const DashboardTemplateMobileWithRouter = withRouter(DashboardTemplateMobile);
export { DashboardTemplateMobileWithRouter as DashboardTemplateMobile };

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
  padding: ${({ theme }) => theme.spacing.unit}px;
`;

const BottomNavigationActionNoTextWrap = styled(BottomNavigationAction).attrs({
  classes: { label: "label" },
})`
  .label {
    white-space: nowrap;
    overflow: hidden;
  }
`;
