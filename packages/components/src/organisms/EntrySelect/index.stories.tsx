import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React from "react";

import { EntrySelect } from ".";
import { ContentCenterWrapper } from "../../atoms/ContentCenterWrapper";
import { createSelectEntryPlaceholderData } from "./createSelectEntryPlaceholderData";

const props = createSelectEntryPlaceholderData();
const propsWithEducationRequirements: typeof props = {
  ...props,
  entries: props.entries.map(e => ({
    ...e,
    educationRequirement: "12th Science with Maths",
  })),
};

storiesOf("Organisms", module).add(
  "EntrySelect",
  withInfo({ propTablesExclude: [ContentCenterWrapper as any] })(() => (
    <ContentCenterWrapper>
      <EntrySelect {...props} onSelectionChange={action("onSelectionChange")} />

      <div style={{ marginTop: 24 }} />

      <EntrySelect
        {...propsWithEducationRequirements}
        onSelectionChange={action("onSelectionChange")}
      />
    </ContentCenterWrapper>
  )),
);
