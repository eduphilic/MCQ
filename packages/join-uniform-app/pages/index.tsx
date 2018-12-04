import { LayoutLanding } from "@join-uniform/components";
import React from "react";
import { GetLandingFooterComponent } from "../graphql";

function IndexPage() {
  return (
    <GetLandingFooterComponent>
      {query => {
        if (query.loading) return null;

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
