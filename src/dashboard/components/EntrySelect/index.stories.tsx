import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React from "react";

import { ContentCenterWrapper } from "components/ContentCenterWrapper";
import { EntrySelect } from ".";
import { createSelectEntryPlaceholderData } from "./createSelectEntryPlaceholderData";

const props = createSelectEntryPlaceholderData();
const propsWithAdditionalDescriptionText: typeof props = {
  ...props,
  entries: props.entries.map(e => ({
    ...e,

    additionalDescriptionText: "12th Science with Maths",
  })),
};

storiesOf("Components", module).add(
  "EntrySelect",
  withInfo({ propTablesExclude: [ContentCenterWrapper as any] })(() => (
    <ContentCenterWrapper>
      <EntrySelect {...props} onSelectionChange={action("onSelectionChange")} />

      <div style={{ marginTop: 24 }} />

      <EntrySelect
        {...propsWithAdditionalDescriptionText}
        onSelectionChange={action("onSelectionChange")}
      />
    </ContentCenterWrapper>
  )),
);
