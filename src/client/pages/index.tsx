// This needs to be imported first to initialize the new Material UI style
// engine.
import "../bootstrapMaterialUIStyles";

import Link from "next/link";
import React from "react";
import { LayoutLandingStickyFooter } from "../components";

export default () => {
  return (
    <LayoutLandingStickyFooter>
      Welcome
      <br />
      <Link href="/signup">
        <a>Sign Up</a>
      </Link>
    </LayoutLandingStickyFooter>
  );
};
