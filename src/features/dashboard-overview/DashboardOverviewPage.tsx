import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import { CardMobileFlat } from "components/CardMobileFlat";
import { SelectedEntries } from "features/subscription-management";
import React, { SFC } from "react";
import { OverviewCard } from "./components/OverviewCard";

import { createEntryCategoryPlaceholders } from "../subscription-management/placeholders/createEntryCategoryPlaceholders";
import { createEntryPlaceholders } from "../subscription-management/placeholders/createEntryPlaceholders";

const entries = createEntryPlaceholders().slice(1, 3);
const categories = createEntryCategoryPlaceholders();
// tslint:disable-next-line:no-empty
const noop = () => {};

export const DashboardOverviewPage: SFC = () => (
  <>
    <OverviewCard title="Rank" stats={createPlaceholderStats()} />

    <CardMobileFlat>
      <CardHeader title="Your Selected Entries" />
      <CardContent>
        <SelectedEntries
          entries={entries}
          minEntriesCount={2}
          maxEntriesCount={2}
          selectedEntryIDs={entries.map(entry => entry.id)}
          onEntryRemoveButtonClick={noop}
          onAddMoreButtonClick={noop}
        />
      </CardContent>
    </CardMobileFlat>
  </>
);

const createPlaceholderStats = () => {
  const stats = entries.map((entry, index) => {
    const category = categories.find(c => c.entryID === entry.id)!;

    return {
      [`${category.title.en} (${entry.title.en})`]: `123/999 (92% from ${5 +
        index * 3} papers)`,
    };
  });

  return stats.reduce((accumulator, stat) => {
    return { ...accumulator, ...stat };
  }, {});
};
