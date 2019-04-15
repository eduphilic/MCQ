import dynamic from "next/dynamic";
import React from "react";

const ResourceTestView = dynamic(
  () =>
    import("../resource-test").then(
      mod => mod.ResourceTestView as any,
      //
    ),
  {
    ssr: false,
  },
);

function ResourceTestPage() {
  return <ResourceTestView />;
}

export default ResourceTestPage;
