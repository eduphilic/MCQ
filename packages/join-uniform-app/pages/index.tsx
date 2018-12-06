import { LayoutLanding } from "@join-uniform/components";
import { GetLandingFooterComponent } from "@join-uniform/graphql";
import React from "react";

function IndexPage() {
  return (
    <GetLandingFooterComponent>
      {query => {
        if (query.loading) return null;
        /* tslint:disable-next-line:no-console */
        console.warn("Adding loading indicator component");

        return (
          <LayoutLanding
            footerText={query.data!.htmlConfig.landingFooter || "Join Uniform"}
          >
            Test
          </LayoutLanding>
        );
      }}
    </GetLandingFooterComponent>
  );
}

export default IndexPage;
