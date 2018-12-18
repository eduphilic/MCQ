import MuiHidden, {
  HiddenProps as MuiHiddenProps,
} from "@material-ui/core/Hidden";
import React from "react";

export type HiddenProps = Omit<MuiHiddenProps, "implementation"> & {
  // Make "implementation" prop required.
  implementation: NonNullable<MuiHiddenProps["implementation"]>;
};

export function Hidden(props: HiddenProps) {
  // Hopefully tree shake this away in production.
  if (process.env.NODE_ENV === "development") {
    // Enforce usage of the "implementation" prop to avoid unexpected warning
    // when rehydrating from server side rendering.
    if (typeof props.implementation !== "string") {
      throw new Error(
        "Implementation must be specified to prevent accidental issues with server side rendering.",
      );
    }
  }

  return <MuiHidden {...props} />;
}
