import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import { Formik } from "formik";
import React from "react";

import { FormikCheckbox } from ".";

const initialValues = {
  someField: false,
};

type Values = typeof initialValues;

class TypedFormik extends Formik<{}, Values> {}

// tslint:disable-next-line:no-empty
const noop = () => {};

storiesOf("Molecules", module).add(
  "FormikCheckbox",
  withInfo({
    propTablesExclude: [TypedFormik as any],
    propTables: [FormikCheckbox as any],
  })(() => {
    return (
      <TypedFormik initialValues={initialValues} onSubmit={noop}>
        {api => (
          <FormikCheckbox formikApi={api} name="someField" label="Some Field" />
        )}
      </TypedFormik>
    );
  }),
);
