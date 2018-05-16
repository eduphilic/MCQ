import { storiesOf } from "@storybook/react";
import React from "react";

import { DashboardFormDialog, FieldConfigs } from ".";
import { ContentCenterWrapper } from "../../atoms/ContentCenterWrapper";
import { TypographyButton } from "../../molecules/TypographyButton";

interface Values {
  entryType: string;
  categoryType: string;
}

storiesOf("Organisms", module).add("DashboardFormDialog", () => {
  // Simulate delay from submitting by way of an api call.
  const onSubmit = () => new Promise(resolve => setTimeout(resolve, 1000));

  const validate = () => Promise.resolve(true);

  const fields: FieldConfigs<Values> = {
    entryType: {
      inputType: "text",
      inputLabel: "Entry Type",
      placeholder: "Enter Entry name here...",
    },
    categoryType: {
      inputType: "text",
      inputLabel: "Category Type",
      placeholder: "Enter category name here...",
    },
  };

  const initialValues: Values = {
    entryType: "",
    categoryType: "",
  };

  return (
    <ContentCenterWrapper style={{ padding: 16 }}>
      <DashboardFormDialog
        initialValues={initialValues}
        fieldConfigs={fields}
        validate={validate}
        onSubmit={onSubmit}
      >
        <TypographyButton>Open Modal</TypographyButton>
      </DashboardFormDialog>
    </ContentCenterWrapper>
  );
});
