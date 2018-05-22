import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import { Formik } from "formik";
import React from "react";

import { FormikTextFieldTypeAhead } from ".";

storiesOf("Molecules", module).add(
  "FormikTextFieldTypeAhead",
  withInfo()(() => {
    const initialValues = {
      entryType: "",
    };

    type Values = typeof initialValues;
    class TypedFormik extends Formik<{}, Values> {}

    return (
      // tslint:disable-next-line:no-empty
      <TypedFormik initialValues={initialValues} onSubmit={() => {}}>
        {formikApi => (
          <FormikTextFieldTypeAhead
            formikApi={formikApi}
            name="entryType"
            suggestions={["AFCAT", "NDA", "Paramilitary"]}
          />
        )}
      </TypedFormik>
    );
  }),
);
