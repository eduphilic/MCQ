import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import { Formik } from "formik";
import React from "react";

import { FormikTextField } from ".";

storiesOf("Components", module).add(
  "FormikTextField",
  withInfo()(() => {
    const initialValues = {
      someField: "",
    };

    type Values = typeof initialValues;
    class TypedFormik extends Formik<{}, Values> {}

    return (
      // tslint:disable-next-line:no-empty
      <TypedFormik
        validate={values => {
          const errors: Partial<Record<keyof Values, string>> = {};
          if (values.someField.length > 5) errors.someField = "Too long!";
          return errors;
        }}
        initialValues={initialValues}
        // tslint:disable-next-line:no-empty
        onSubmit={() => {}}
      >
        {api => (
          <FormikTextField
            name="someField"
            label="Some Field"
            placeholder="A test field..."
            formikApi={api}
          />
        )}
      </TypedFormik>
    );
  }),
);
