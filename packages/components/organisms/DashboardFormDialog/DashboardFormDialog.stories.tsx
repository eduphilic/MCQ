import { storiesOf } from "@storybook/react";
import { FormikConfig } from "formik";
import React from "react";

import { DashboardFormDialog, DashboardFormDialogInputElementTypes } from ".";
import { ContentCenterWrapper } from "../../atoms/ContentCenterWrapper";
import { TypographyButton } from "../../molecules/TypographyButton";

interface Values {
  entryType: string;
}

storiesOf("Organisms", module).add("DashboardFormDialog", () => {
  const formikConfig: FormikConfig<Values> = {
    initialValues: {
      entryType: "",
    },
    // tslint:disable-next-line:no-empty
    onSubmit: () => {},
  };

  const inputElementTypes: DashboardFormDialogInputElementTypes<Values> = {
    entryType: "text",
  };

  return (
    <ContentCenterWrapper style={{ padding: 16 }}>
      <DashboardFormDialog
        formikConfig={formikConfig}
        inputElementTypes={inputElementTypes}
      >
        <TypographyButton>Open Modal</TypographyButton>
      </DashboardFormDialog>
    </ContentCenterWrapper>
  );
});
