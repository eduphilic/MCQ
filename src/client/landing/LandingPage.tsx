import Link from "next/link";
import React from "react";
import { LandingPageConfig } from "../../common";
import { LayoutLandingStickyFooter } from "./components";

export type LandingPageProps = LandingPageConfig;

export function LandingPage(props: LandingPageProps) {
  /* tslint:disable-next-line:no-console */
  console.log({ props });

  return (
    <LayoutLandingStickyFooter>
      Welcome
      <br />
      <Link href="/signup">
        <a>Sign Up</a>
      </Link>
    </LayoutLandingStickyFooter>
  );
}
