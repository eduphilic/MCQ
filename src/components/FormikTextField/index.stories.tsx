import { storiesOf } from "@storybook/react";
import { Formik, FormikProps } from "formik";
import React from "react";

import { FormikTextField } from ".";

const initialValues = {
  someField: "",
};

type Values = typeof initialValues;

// tslint:disable-next-line:no-empty
const noop = () => {};

storiesOf("Components", module)
  .addDecorator(story => (
    <Formik
      initialValues={initialValues}
      onSubmit={noop}
      validate={values => {
        const errors: Partial<Record<keyof Values, string>> = {};
        if (values.someField.length > 5) errors.someField = "Too long!";
        return errors;
      }}
    >
      {story()}
    </Formik>
  ))
  .add("FormikTextField", () => (api: FormikProps<Values>) => (
    <FormikTextField
      name="someField"
      label="Some Field"
      placeholder="A test field..."
      formikApi={api}
    />
  ));
