import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React from "react";
import { createEntryPlaceholders } from "../../placeholders/createEntryPlaceholders";

import { ContentCenterWrapper } from "components/ContentCenterWrapper";
import { EntrySelect } from "./EntrySelect";

const entries = createEntryPlaceholders();

storiesOf("Subscription Management", module).add(
  "EntrySelect",
  withInfo({ propTablesExclude: [ContentCenterWrapper as any] })(() => (
    <ContentCenterWrapper>
      <EntrySelect
        entries={entries}
        minSelectedCount={1}
        maxSelectedCount={3}
        onSelectionChange={action("onSelectionChange")}
      />
    </ContentCenterWrapper>
  )),
);
