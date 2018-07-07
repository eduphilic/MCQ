import { NavigationLinks } from "common/types/NavigationLinks";
import { bottomNavBoxShadow } from "css";
import { strings } from "localization";
import React, {
  ChangeEvent,
  cloneElement,
  Component,
  ReactElement,
  ReactNode,
} from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import styled from "styled";

import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Paper from "@material-ui/core/Paper";

import { BaseSwippableTemplate } from "components/BaseSwippableTemplate";
import { DashboardTemplateProps } from "components/DashboardTemplate";

import { getPaneIndexFromRoute } from "./getPaneIndexFromRoute";

export interface DashboardTemplateMobileProps
  extends Omit<DashboardTemplateProps, "children" | "drawerContentsNode">,
    RouteComponentProps<{}> {
  /**
   * Links to render on the bottom navigation.
   */
  links: NavigationLinks;

  /**
   * Optional theme element to wrap the bottom navigation component in. This is
   * used to apply a background color.
   */
  themeElement?: ReactElement<any>;
}

interface DashboardTemplateMobileState {
  selectedPane: number;
}

/**
 * Provides a mobile user dashboard template. It features a bottom navigation
 * component and allows navigation using left and right swipe gestures.
 */
class DashboardTemplateMobile extends Component<
  DashboardTemplateMobileProps,
  DashboardTemplateMobileState
> {
  state: DashboardTemplateMobileState = {
    selectedPane: getPaneIndexFromRoute(this.props.links, this.props.history),
  };

  private handleSwipe = (paneIndex: number) => {
    const { links, history } = this.props;

    history.push(links[paneIndex].to);
  };

  private handleBottomNavigationChange = (
    _e: ChangeEvent<{}>,
    value: string,
  ) => {
    const { links, history } = this.props;
    const paneIndex = getPaneIndexFromRoute(links, history, value);

    this.setState({ selectedPane: paneIndex });
  };

  render() {
    const { appBarNode, links, location, themeElement } = this.props;
    const { selectedPane } = this.state;

    const withTheme = (node: ReactNode) =>
      themeElement ? cloneElement(themeElement, {}, node) : node;

    const paneKeyNodeMap: { key: string; node: ReactNode }[] = [];
    const bottomNavigationActions: ReactNode[] = [];

    links.forEach(l => {
      const { titleLocalizationKey, to, iconElement } = l;
      const PaneComponent = l.component;

      paneKeyNodeMap.push({
        key: titleLocalizationKey,
        node: <PaneComponent />,
      });

      bottomNavigationActions.push(
        <BottomNavigationActionNoTextWrap
          key={titleLocalizationKey}
          className={themeElement ? "with-theme" : undefined}
          icon={iconElement}
          value={to}
          label={strings[titleLocalizationKey]}
        />,
      );
    });

    const headerNode = appBarNode;

    const footerNode = (
      <PaperWithBoxShadowUpperDirection>
        {withTheme(
          <BottomNavigationWithBackgroundColor
            showLabels
            value={location.pathname}
            onChange={this.handleBottomNavigationChange}
          >
            {bottomNavigationActions}
          </BottomNavigationWithBackgroundColor>,
        )}
      </PaperWithBoxShadowUpperDirection>
    );

    const onPaneChange = this.handleSwipe;

    return (
      <BaseSwippableTemplate
        headerNode={headerNode}
        paneKeyNodeMap={paneKeyNodeMap}
        footerNode={footerNode}
        selectedPane={selectedPane}
        onPaneChange={onPaneChange}
      />
    );
  }
}

const DashboardTemplateMobileWithRouter = withRouter(DashboardTemplateMobile);
export { DashboardTemplateMobileWithRouter as DashboardTemplateMobile };

const PaperWithBoxShadowUpperDirection = styled(Paper)`
  ${bottomNavBoxShadow};
  z-index: 1;
`;

const BottomNavigationWithBackgroundColor = styled(BottomNavigation)`
  background-color: ${({ theme }) => theme.palette.background.default};
`;

const BottomNavigationActionNoTextWrap = styled(BottomNavigationAction).attrs({
  classes: { label: "label", selected: "selected" },
})`
  &.with-theme {
    color: rgba(255, 255, 255, 0.45);
  }

  &.with-theme.selected {
    color: ${({ theme }) => theme.palette.primary.contrastText};
  }

  .label {
    white-space: nowrap;
    overflow: hidden;
  }
`;
