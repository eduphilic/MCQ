import { NextFunctionComponent } from "next";
import React from "react";
import { LandingPage, LandingPageProps } from "../landing";

const LandingPageContainer: NextFunctionComponent<LandingPageProps> = () => {
  return <LandingPage stickyFooterText={{ en: "placeholder" }} />;
};

// LandingPageContainer.getInitialProps = async context => {
//   const store = getStoreFromPageContext(context);

//   const landingPageConfig = await fetchDataForFetchReducer(
//     store,
//     "landing",
//     state => state.landing.config,
//     actions.config,
//   ).toPromise();

//   return landingPageConfig;
// };

export default LandingPageContainer;
