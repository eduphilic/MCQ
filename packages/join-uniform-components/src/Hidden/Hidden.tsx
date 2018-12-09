import MuiHidden, {
  HiddenProps as MuiHiddenProps,
} from "@material-ui/core/Hidden";
import React from "react";

export type HiddenProps = Omit<MuiHiddenProps, "implementation">;

/**
 * The Material UI Hidden component with the implementation set to "css". The
 * "css" implementation is required because the app is server side rendered.
 * Ensuring that only the css implementation is used prevents rehydration errors
 * from differences in the server and client viewport sizes.
 */
export function Hidden(props: HiddenProps) {
  return <MuiHidden implementation="css" {...props} />;
}
