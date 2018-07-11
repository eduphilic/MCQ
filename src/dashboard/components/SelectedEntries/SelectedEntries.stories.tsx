import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";
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

stories.add("SelectedEntries", () => {
  const selectedEntryIDsToggle = boolean("Minimum Entries", false)
    ? selectedEntryIDs.slice(0, 1)
    : selectedEntryIDs;

  return (
    <SelectedEntries
      entries={entries}
      entrySelectMeta={entrySelectMeta}
      selectedEntryIDs={selectedEntryIDsToggle}
      onEntryRemoveButtonClick={action("onEntryRemoveButtonClick")}
      onAddMoreButtonClick={action("onAddMoreButtonClick")}
    />
  );
});
