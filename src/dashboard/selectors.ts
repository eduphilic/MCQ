import { createSelector } from "reselect";
import { State } from "./reducer";

const subscribedEntriesSelector = (state: State) => state.subscribedEntries;

export type OnboardingProgress = null | "select-entries" | "complete";

export const onboardingProgressSelector = createSelector(
  subscribedEntriesSelector,
  (subscribedEntries): OnboardingProgress => {
    if (subscribedEntries === null) return null;
    if (subscribedEntries.length === 0) return "select-entries";

    return null;
  },
);
