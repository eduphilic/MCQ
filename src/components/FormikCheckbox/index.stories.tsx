import { storiesOf } from "@storybook/react";
import { Formik, FormikProps } from "formik";
import React from "react";

import { FormikCheckbox } from ".";

const initialValues = {
  someField: false,
};

type Values = typeof initialValues;

// tslint:disable-next-line:no-empty
const noop = () => {};

storiesOf("Components", module)
  .addParameters({
    info: { propTablesExclude: [Formik], propTables: [FormikCheckbox] },
  })
  .addDecorator(story => (
    <Formik initialValues={initialValues} onSubmit={noop}>
      {story()}
    </Formik>
  ))
  .add("FormikCheckbox", () => (api: FormikProps<Values>) => (
    <FormikCheckbox<Values>
      formikApi={api}
      name="someField"
      label="Some Field"
    />
  ));
