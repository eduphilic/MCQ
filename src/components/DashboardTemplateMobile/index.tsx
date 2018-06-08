import React, {
  ChangeEvent,
  Component,
  ComponentType,
  createRef,
  ReactElement,
  ReactNode,
} from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import ReactSwipe from "react-swipe";
import styled from "styled";

import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

import { DashboardTemplateProps } from "../DashboardTemplate";
import { DrawerContentsProps } from "../DrawerContents";

// tslint:disable-next-line:no-empty-interface
export interface DashboardTemplateMobileProps
  extends Omit<DashboardTemplateProps, "children" | "drawerContentsNode">,
    RouteComponentProps<{}> {
  navigationLinks: DrawerContentsProps["links"];
  navigationLinkComponentMap: Record<string, ComponentType<any>>;
}

class DashboardTemplateMobile extends Component<DashboardTemplateMobileProps> {
  // @ts-ignore
  private reactSwipe = createRef<ReactSwipe>();

  private getLinkValues = (
    link: DashboardTemplateMobileProps["navigationLinks"][0],
  ) => {
    // Have to grab third array element due to an issue with the typings.
    let icon: ReactElement<any> | undefined;
    if (link.length === 3) icon = link[2];

    return { localizationKey: link[0], routerPath: link[1], icon };
  };

  private handleSwipe = (paneIndex: number) => {
    const { navigationLinks, history } = this.props;
    const { routerPath } = this.getLinkValues(navigationLinks[paneIndex]);
    history.push(routerPath);
  };

  private getPaneIndexFromRoute = (routerPath?: string) => {
    const { navigationLinks, history } = this.props;

    const matchPath = routerPath || history.location.pathname;

    const paneIndex = navigationLinks.findIndex(l => l[1] === matchPath);
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
    const {
      appBarNode,
      navigationLinks,
      navigationLinkComponentMap,
      location,
    } = this.props;

    const panes: ReactNode[] = [];
    const bottomNavigationActions: ReactNode[] = [];

    navigationLinks.forEach(l => {
      const { routerPath, icon } = this.getLinkValues(l);
      const PaneComponent = navigationLinkComponentMap[routerPath];

      panes.push(
        <Pane key={routerPath}>
          <PaneComponent />
        </Pane>,
      );

      bottomNavigationActions.push(
        <BottomNavigationAction
          key={routerPath}
          icon={icon}
          value={routerPath}
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
