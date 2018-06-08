import React, {
  Component,
  ComponentType,
  createRef,
  ReactElement,
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
  extends Omit<DashboardTemplateProps, "drawerContentsNode">,
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

  render() {
    const { children, appBarNode, navigationLinks } = this.props;

    return (
      <Wrapper>
        {appBarNode}

        <ReactSwipeFlexGrow swipeOptions={{ continuous: false }}>
          <Pane>{children}</Pane>
          <Pane>Pane 2</Pane>
          <Pane>Pane 3</Pane>
        </ReactSwipeFlexGrow>

        <BottomNavigation>
          {navigationLinks.map(l => {
            const { localizationKey, icon } = this.getLinkValues(l);
            return <BottomNavigationAction key={localizationKey} icon={icon} />;
          })}
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
