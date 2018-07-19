import { IEntry, IEntryCategory } from "models";
import { AppLayout, INavigationLink, PageContentWrapper } from "navigation";
import React, { Component, SFC } from "react";
import { connect } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import { State } from "store";
import { actions } from "./actions";
import { navigationLinks } from "./navigationLinks";
import { OnboardingProgress, onboardingProgressSelector } from "./selectors";

import { PostSignupDialogs } from "./components/PostSignupDialogs/PostSignupDialogs";
import { OnboardingEntriesPage } from "./OnboardingEntriesPage";
import { OnboardingSubscriptionPage } from "./OnboardingSubscriptionPage";

type StateProps = {
  entries: IEntry[] | null;
  entryCategories: IEntryCategory[] | null;
  onboardingProgress: OnboardingProgress;
  postSignupDialogsShown: boolean;
};

type DispatchProps = {
  loadPlaceholderEntries: () => any;
  loadPlaceholderEntryCategories: () => any;
  loadPlaceholderSubscribedEntries: () => any;
  loadPlaceholderExamQuantitySelectMeta: () => any;
};

type OwnProps = {};

type Props = StateProps & DispatchProps & OwnProps;

class DashboardPages extends Component<Props> {
  constructor(props: Props) {
    super(props);

    props.loadPlaceholderEntries();
    props.loadPlaceholderEntryCategories();
    props.loadPlaceholderSubscribedEntries();
    props.loadPlaceholderExamQuantitySelectMeta();
  }

  render() {
    const {
      entries,
      entryCategories,
      onboardingProgress,
      postSignupDialogsShown,
    } = this.props;
    if (!entries || !entryCategories || !onboardingProgress) return null;

    const links = this.buildDashboardLinks();
    const onboardingRoutes = this.buildOnboardingRoutes();
    const dashboardRoutes = this.buildDashboardRoutes(links);

    return (
      <>
        <AppLayout
          links={links}
          enableSwipeNavigation={onboardingProgress === "complete"}
        >
          <PageContentWrapper verticalGutters>
            <Switch>
              {onboardingRoutes}
              {dashboardRoutes}
            </Switch>
          </PageContentWrapper>
        </AppLayout>

        {onboardingProgress === "complete" &&
          !postSignupDialogsShown && <PostSignupDialogs />}
      </>
    );
  }

  private buildOnboardingRoutes = () => {
    const { onboardingProgress } = this.props;

    let RedirectComponent: SFC<{}> | undefined;
    if (onboardingProgress === "complete") {
      RedirectComponent = () => <Redirect to="/dashboard" />;
    }

    return [
      <Route
        key="/welcome/entries"
        path="/welcome/entries"
        component={RedirectComponent || OnboardingEntriesPage}
      />,
      <Route
        key="/welcome/subscriptions"
        path="/welcome/subscriptions"
        component={
          RedirectComponent ||
          (onboardingProgress === "select-subscription"
            ? OnboardingSubscriptionPage
            : () => <Redirect to="/welcome/entries" />)
        }
      />,
    ];
  };

  /**
   * We disable navigation links here when the onboarding process is still in
   * progress.
   */
  private buildDashboardLinks = (): INavigationLink[] => {
    const { onboardingProgress } = this.props;

    let RedirectComponent: SFC<any> | undefined;

    switch (onboardingProgress) {
      case "select-entries": {
        RedirectComponent = () => <Redirect to="/welcome/entries" />;
        break;
      }

      case "select-subscription": {
        RedirectComponent = () => <Redirect to="/welcome/subscriptions" />;
        break;
      }

      case "complete": {
        break;
      }
    }

    return navigationLinks.map(l => ({
      ...l,
      component: RedirectComponent || l.component,
      disabled: onboardingProgress !== "complete",
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
  ({ dashboard }) => ({
    entries: dashboard.entries,
    entryCategories: dashboard.entryCategories,
    onboardingProgress: onboardingProgressSelector(dashboard),
    postSignupDialogsShown: dashboard.postSignupDialogsShown,
  }),
  {
    loadPlaceholderEntries: actions.loadPlaceholderEntries,
    loadPlaceholderEntryCategories: actions.loadPlaceholderEntryCategories,
    loadPlaceholderSubscribedEntries: actions.loadPlaceholderSubscribedEntries,
    loadPlaceholderExamQuantitySelectMeta:
      actions.loadPlaceholderExamQuantitySelectMeta,
  },
)(DashboardPages);
export { DashboardPagesContainer as DashboardPages };
