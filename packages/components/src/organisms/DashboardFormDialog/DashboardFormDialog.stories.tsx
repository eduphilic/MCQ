import { action } from "@storybook/addon-actions";
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
  const onSubmitValue = action("onSubmit");

  // Simulate delay from submitting by way of an api call.
  const onSubmit = (values: object) =>
    new Promise(resolve =>
      setTimeout(() => {
        /* tslint:disable-next-line:no-console */
        console.log("values", values);
        onSubmitValue(values);
        resolve();
      }, 1000),
    );

  const validate = () => Promise.resolve(true);

  const fields: FieldConfigs<Values> = {
    entryType: {
      inputType: "text-autocomplete",
      inputLabel: "Entry Type",
      placeholder: "Enter Entry name here...",
      suggestions: ["AirForce", "Assam Rifles", "Coast Guard", "ITBP"],
    },
    categoryType: {
      inputType: "text-autocomplete",
      inputLabel: "Category Type",
      placeholder: "Enter category name here...",
      suggestions: ["AFCAT", "NDA", "Paramilitary"],
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
