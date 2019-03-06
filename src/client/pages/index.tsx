// This needs to be imported first to initialize the new Material UI style
// engine.
import "../bootstrapMaterialUIStyles";

import { NextFunctionComponent } from "next";
import React from "react";
// import { delay } from "rxjs/operators";
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
  )
    // .pipe(delay(5000))
    .toPromise();

  return landingPageConfig;
};

export default LandingPageContainer;
