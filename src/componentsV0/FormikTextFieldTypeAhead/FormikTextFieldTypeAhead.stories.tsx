import { storiesOf } from "@storybook/react";
import React from "react";

import { StorybookContentCenterWrapper } from "componentsV0/storybook/StorybookContentCenterWrapper";
import { formik } from "componentsV0/storybook/StorybookFormikAddon";
import { FormikTextFieldTypeAhead } from "./FormikTextFieldTypeAhead";

const initialValues = {
  entryType: "",
};

type Values = typeof initialValues;

storiesOf("Components", module)
  .addParameters({ formik: { initialValues } })
  .add("FormikTextFieldTypeAhead", () => {
    const api = formik<Values>();

    return (
      <StorybookContentCenterWrapper>
        <FormikTextFieldTypeAhead
          formikApi={api}
          name="entryType"
          label="Entry Type"
          placeholder="Enter entry type here..."
          suggestions={["AFCAT", "NDA", "Paramilitary"]}
        />
      </StorybookContentCenterWrapper>
    );
  });
