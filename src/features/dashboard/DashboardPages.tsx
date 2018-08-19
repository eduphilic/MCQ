import { UserDashboardTourModal } from "features/interface-tours";
import {
  AppLayout,
  INavigationLink,
  MultipathRoute,
  PageContentWrapper,
  routePathFromLocalizationKey,
} from "features/navigation";
import {
  isOnboardingSelector,
  PlaceholderSubscriptionLoader,
  SubscriptionManagementPage,
} from "features/subscription-management";
import React, { Component, SFC } from "react";
import { connect } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import { State } from "store";
import { navigationLinks } from "./navigationLinks";

import { PostSignupDialogs } from "./components/PostSignupDialogs";

type StateProps = {
  isOnboarding: boolean;
  postSignupDialogsShown: boolean;
};

type OwnProps = {};

type Props = StateProps & OwnProps;

class DashboardPages extends Component<Props> {
  render() {
    const { isOnboarding, postSignupDialogsShown } = this.props;

    const links = this.buildDashboardLinks();
    const onboardingRoutes = this.buildOnboardingRoutes();
    const dashboardRoutes = this.buildDashboardRoutes(links);

    return (
      // TODO: Remove PlaceholderSubscriptionLoader. This is used to skip the
      // onboarding process during development.
      <PlaceholderSubscriptionLoader>
        <AppLayout links={links} enableSwipeNavigation={!isOnboarding}>
          <PageContentWrapper verticalGutters>
            <Switch>
              {dashboardRoutes}
              {onboardingRoutes}
            </Switch>
          </PageContentWrapper>
        </AppLayout>

        {!isOnboarding && !postSignupDialogsShown && <PostSignupDialogs />}

        {!isOnboarding && postSignupDialogsShown && <UserDashboardTourModal />}
      </PlaceholderSubscriptionLoader>
    );
  }

  private buildOnboardingRoutes = () => {
    const { isOnboarding } = this.props;

    let RedirectComponent: SFC<{}> | undefined;
    if (!isOnboarding) {
      RedirectComponent = () => (
        <Redirect
          to={routePathFromLocalizationKey(
            "routes_ProgressOverview_ProgressOverviewPage",
          )}
        />
      );
    }

    return [
      <MultipathRoute
        key="onboarding"
        paths={[
          routePathFromLocalizationKey(
            "routes_Dashboard_OnboardingEntriesPage",
          ),
          routePathFromLocalizationKey(
            "routes_Dashboard_OnboardingSubscriptionPage",
          ),
        ]}
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
      RedirectComponent = () => (
        <Redirect
          to={routePathFromLocalizationKey(
            "routes_Dashboard_OnboardingEntriesPage",
          )}
        />
      );
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

const DashboardPagesContainer = connect<StateProps, {}, OwnProps, State>(
  (state): StateProps => {
    const {
      dashboard: { postSignupDialogsShown },
    } = state;

    return {
      isOnboarding: isOnboardingSelector(state),
      postSignupDialogsShown,
    };
  },
)(DashboardPages);
export { DashboardPagesContainer as DashboardPages };
