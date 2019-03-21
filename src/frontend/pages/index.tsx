import { NextFunctionComponent } from "next";
import React from "react";
import { actions, LandingPage, LandingPageProps } from "../landing";
import { getStoreFromPageContext } from "../store";
import { fetchDataForFetchReducer } from "../util";

const LandingPageContainer: NextFunctionComponent<LandingPageProps> = props => {
  return <LandingPage {...props} />;
};

LandingPageContainer.getInitialProps = async context => {
  const store = getStoreFromPageContext(context);

  const landingPageConfig = await fetchDataForFetchReducer(
    store,
    "landing",
    state => state.landing.config,
    actions.config,
  ).toPromise();

  return landingPageConfig;
};

export default LandingPageContainer;