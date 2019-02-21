import { NextContext } from "next";
import { AppStore } from "./createStore";

export function getStoreFromPageContext(context: NextContext) {
  // @ts-ignore
  return context.reduxStore as AppStore;
}
