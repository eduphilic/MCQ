import { createSelector } from "reselect";
import { State } from "./reducer";

const subscribedEntriesSelector = (state: State) => state.subscribedEntries;
const entriesPendingPurchaseSelector = (state: State) =>
  state.entriesPendingPurchase;

export type OnboardingProgress =
  | null
  | "select-entries"
  | "select-subscription"
  | "complete";

export const onboardingProgressSelector = createSelector(
  subscribedEntriesSelector,
  entriesPendingPurchaseSelector,
  (subscribedEntries, entriesPendingPurchase): OnboardingProgress => {
    if (subscribedEntries === null) return null;
    if (subscribedEntries.length === 0) {
      if (entriesPendingPurchase.length > 0) return "select-subscription";

      return "select-entries";
    }

    return "complete";
  },
);
