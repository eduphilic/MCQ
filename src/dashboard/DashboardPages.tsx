import { IEntry, IEntryCategory } from "models";
import {
  AppLayout,
  INavigationLink,
  MultipathRoute,
  PageContentWrapper,
} from "navigation";
import React, { Component, SFC } from "react";
import { connect } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import { State } from "store";
import {
  isOnboardingSelector,
  SubscriptionManagementPage,
} from "subscription-management";
import { actions } from "./actions";
import { navigationLinks } from "./navigationLinks";

import { PostSignupDialogs } from "./components/PostSignupDialogs/PostSignupDialogs";

type StateProps = {
  entries: IEntry[] | null;
  entryCategories: IEntryCategory[] | null;
  isOnboarding: boolean;
  postSignupDialogsShown: boolean;
};

type DispatchProps = {
  loadPlaceholderEntries: () => any;
  loadPlaceholderSubscribedEntries: () => any;
};

type OwnProps = {};

type Props = StateProps & DispatchProps & OwnProps;

class DashboardPages extends Component<Props> {
  constructor(props: Props) {
    super(props);

    props.loadPlaceholderEntries();
    props.loadPlaceholderSubscribedEntries();
  }

  render() {
    const {
      entries,
      entryCategories,
      isOnboarding,
      postSignupDialogsShown,
    } = this.props;
    if (!entries || !entryCategories) return null;

    const links = this.buildDashboardLinks();
    const onboardingRoutes = this.buildOnboardingRoutes();
    const dashboardRoutes = this.buildDashboardRoutes(links);

    return (
      <>
        <AppLayout links={links} enableSwipeNavigation={!isOnboarding}>
          <PageContentWrapper verticalGutters>
            <Switch>
              {dashboardRoutes}
              {onboardingRoutes}
            </Switch>
          </PageContentWrapper>
        </AppLayout>

        {!isOnboarding && !postSignupDialogsShown && <PostSignupDialogs />}
      </>
    );
  }

  private buildOnboardingRoutes = () => {
    const { isOnboarding } = this.props;

    let RedirectComponent: SFC<{}> | undefined;
    if (!isOnboarding) RedirectComponent = () => <Redirect to="/dashboard" />;

    return [
      <MultipathRoute
        key="onboarding"
        paths={["/welcome/entries", "/welcome/subscriptions"]}
        render={() =>
          RedirectComponent ? (
            <RedirectComponent />
          ) : (
            <SubscriptionManagementPage />
          )
        }
      />,
    ];
  };

  /**
   * We disable navigation links here when the onboarding process is still in
   * progress.
   */
  private buildDashboardLinks = (): INavigationLink[] => {
    const { isOnboarding } = this.props;

    let RedirectComponent: SFC<any> | undefined;

    if (isOnboarding) {
      RedirectComponent = () => <Redirect to="/welcome/entries" />;
    }

    return navigationLinks.map(l => ({
      ...l,
      component: RedirectComponent || l.component,
      disabled: isOnboarding,
    }));
  };

  /**
   * Build the user dashboard routes. These are made available once the user has
   * finished the onboarding process. If the onboarding process has not been
   * completed, then redirect the user to one of the onboarding pages.
   */
  private buildDashboardRoutes = (links: INavigationLink[]) => {
    return links.map(({ component: RouteComponent, ...l }) => (
      <Route
        key={l.titleLocalizationKey}
        path={l.to}
        render={() => <RouteComponent />}
      />
    ));
  };
}

const DashboardPagesContainer = connect<
  StateProps,
  DispatchProps,
  OwnProps,
  State
>(
  (state): StateProps => {
    const {
      dashboard: { entries, postSignupDialogsShown },
    } = state;

    return {
      entries,
      entryCategories: {} as any,
      isOnboarding: isOnboardingSelector(state),
      postSignupDialogsShown,
    };
  },
  {
    loadPlaceholderEntries: actions.loadPlaceholderEntries,
    loadPlaceholderSubscribedEntries: actions.loadPlaceholderSubscribedEntries,
  },
)(DashboardPages);
export { DashboardPagesContainer as DashboardPages };
