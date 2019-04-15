import Link from "next/link";
import React from "react";
import { LandingPageConfigModel } from "../../common";
import { LayoutLandingStickyFooter } from "./components";

export type LandingPageProps = LandingPageConfigModel;

export function LandingPage({ stickyFooterText }: LandingPageProps) {
  return (
    <LayoutLandingStickyFooter stickyFooterText={stickyFooterText}>
      Welcome
      <br />
      <Link href="/signup">
        <a>Sign Up</a>
      </Link>
    </LayoutLandingStickyFooter>
  );
}
