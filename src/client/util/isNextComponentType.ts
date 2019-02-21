import { NextComponentType } from "next";
import { NextAppContext } from "next/app";
import { ComponentType } from "react";

export function isNextComponentType<P>(
  App: ComponentType<P>,
): App is NextComponentType<P, P, NextAppContext> {
  return (
    typeof (App as NextComponentType<P, P, NextAppContext>).getInitialProps ===
    "function"
  );
}
