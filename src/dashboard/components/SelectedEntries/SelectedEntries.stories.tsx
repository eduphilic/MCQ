import { storiesOf } from "@storybook/react";
import React from "react";

import { StorybookContentCenterWrapper } from "components/storybook/StorybookContentCenterWrapper";
import { IEntrySelectMeta } from "../../models/IEntrySelectMeta";
import { createEntryPlaceholders } from "../../placeholders/createEntryPlaceholders";
import { SelectedEntries } from "./SelectedEntries";

const stories = storiesOf("Dashboard", module);
stories.addDecorator(story => (
  <StorybookContentCenterWrapper>{story()}</StorybookContentCenterWrapper>
));

const entries = createEntryPlaceholders();
const entrySelectMeta: IEntrySelectMeta = {
  minEntriesCount: 1,
  maxEntriesCount: 3,
};
const selectedEntryIDs = entries.slice(0, 3).map(e => e.id);
const noop = () => {
  //
};

stories.add("SelectedEntries", () => {
  //

  return (
    <SelectedEntries
      entries={entries}
      entrySelectMeta={entrySelectMeta}
      selectedEntryIDs={selectedEntryIDs}
      onEntryRemoveButtonClick={noop}
      onAddMoreButtonClick={noop}
    />
  );
});
