import { storiesOf } from "@storybook/react";
import { FormikConfig } from "formik";
import React from "react";

import { DashboardFormDialog, DashboardFormDialogInputElementTypes } from ".";
import { ContentCenterWrapper } from "../../atoms/ContentCenterWrapper";
import { TypographyButton } from "../../molecules/TypographyButton";

interface Values {
  entryType: string;
  categoryType: string;
}

storiesOf("Organisms", module).add("DashboardFormDialog", () => {
  // Simulate delay from submitting by way of an api call.
  const simulatedSubmitDelay = () =>
    new Promise(resolve => setTimeout(resolve, 1000));

  const formikConfig: FormikConfig<Values> = {
    initialValues: {
      entryType: "",
      categoryType: "",
    },
    onSubmit: simulatedSubmitDelay,
    validate: () => Promise.resolve(true),
  };

  const inputElementTypes: DashboardFormDialogInputElementTypes<Values> = {
    entryType: "text",
    categoryType: "text",
  };

  const inputElementLabels = {
    entryType: "Entry Type",
    categoryType: "Category Type",
  };

  const inputElementPlaceholders = {
    entryType: "Enter entry name here...",
    categoryType: "Enter category name here...",
  };

  return (
    <ContentCenterWrapper style={{ padding: 16 }}>
      <DashboardFormDialog
        formikConfig={formikConfig}
        inputElementTypes={inputElementTypes}
        inputElementLabels={inputElementLabels}
        inputElementPlaceholders={inputElementPlaceholders}
      >
        <TypographyButton>Open Modal</TypographyButton>
      </DashboardFormDialog>
    </ContentCenterWrapper>
  );
});
