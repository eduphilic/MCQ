import { storiesOf } from "@storybook/react";
import { Formik, FormikProps } from "formik";
import React from "react";

import { StorybookContentCenterWrapper } from "../storybook/StorybookContentCenterWrapper";
import { FormikTextFieldTypeAhead } from "./FormikTextFieldTypeAhead";

// tslint:disable-next-line:no-empty
const noop = () => {};

const initialValues = {
  entryType: "",
};

type Values = typeof initialValues;

storiesOf("Components", module)
  .addParameters({
    info: {
      propTables: [FormikTextFieldTypeAhead],
      propTablesExclude: [Formik],
    },
  })
  .addDecorator(story => (
    <Formik initialValues={initialValues} onSubmit={noop}>
      {story()}
    </Formik>
  ))
  .add("FormikTextFieldTypeAhead", () => (api: FormikProps<Values>) => (
    <StorybookContentCenterWrapper>
      <FormikTextFieldTypeAhead
        formikApi={api}
        name="entryType"
        label="Entry Type"
        placeholder="Enter entry type here..."
        suggestions={["AFCAT", "NDA", "Paramilitary"]}
      />
    </StorybookContentCenterWrapper>
  ));
