import { LayoutLanding, LoadingSpinner } from "@join-uniform/components";
import Link from "next/link";
import React from "react";

function IndexPage() {
  return (
    <LayoutLanding>
      <Link href="/page2">
        <a>Page 2</a>
      </Link>
      <LoadingSpinner />
    </LayoutLanding>
  );
}

export default IndexPage;
