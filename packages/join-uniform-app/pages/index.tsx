import { LayoutLanding, LoadingSpinner } from "@join-uniform/components";
import { GetLandingFooterComponent } from "@join-uniform/graphql";
import Link from "next/link";
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
            <Link href="/page2">
              <a>Page 2</a>
            </Link>
            <LoadingSpinner />
          </LayoutLanding>
        );
      }}
    </GetLandingFooterComponent>
  );
}

export default IndexPage;
