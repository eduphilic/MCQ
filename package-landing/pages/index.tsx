import React from "react";
import { LayoutStickyFooter } from "../components";
import { useFirebase } from "../lib";

export default function IndexPage() {
  const { firebaseInitialized, firebase } = useFirebase();

  /* tslint:disable-next-line:no-console */
  console.log({ firebaseInitialized, firebase });

  return (
    <LayoutStickyFooter title="Test">
      Firebase Initialized: {firebaseInitialized.toString()}
    </LayoutStickyFooter>
  );
}
