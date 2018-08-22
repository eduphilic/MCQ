import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import { CardMobileFlat } from "componentsV0/CardMobileFlat";
import { SelectedEntries } from "features/subscription-management";
import React, { Component } from "react";
import { OverviewCard, OverviewCardStat } from "./components/OverviewCard";

import { createEntryCategoryPlaceholders } from "../subscription-management/placeholders/createEntryCategoryPlaceholders";
import { createEntryPlaceholders } from "../subscription-management/placeholders/createEntryPlaceholders";

const entries = createEntryPlaceholders().slice(1, 3);
const categories = createEntryCategoryPlaceholders();
// tslint:disable-next-line:no-empty
const noop = () => {};

export class DashboardOverviewPage extends Component {
  render() {
    return (
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

        <OverviewCard
          title="Exam Pattern"
          stats={createPlaceholderExamPatternStats()}
          onStatValueClick={this.handleStatClick}
        />
      </>
    );
  }

  private handleStatClick = (_id: string) => {
    alert(`Clicked ${_id}`);
  };
}

const createPlaceholderStats = () => {
  const stats: OverviewCardStat[] = entries.map(
    (entry, index): OverviewCardStat => {
      const category = categories.find(c => c.entryID === entry.id)!;

      const title = `${category.title.en} (${entry.title.en})`;
      const value = `123/999 (92% from ${5 + index * 3} papers)`;

      return {
        id: title,
        title,
        value,
      };
    },
  );

  return stats;
};

const createPlaceholderExamPatternStats = () => {
  const stats = createPlaceholderStats();

  return stats.map(stat => ({
    ...stat,
    value: "View",
  }));
};
