import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import { Formik } from "formik";
import React from "react";

import { FormikTextFieldTypeAhead } from ".";
import { ContentCenterWrapper } from "../../atoms/ContentCenterWrapper";

storiesOf("Molecules", module).add(
  "FormikTextFieldTypeAhead",
  withInfo()(() => {
    // tslint:disable-next-line:no-empty
    const noop = () => {};

    const initialValues = {
      entryType: "",
    };

    type Values = typeof initialValues;
    class TypedFormik extends Formik<{}, Values> {}

    return (
      <ContentCenterWrapper>
        <TypedFormik initialValues={initialValues} onSubmit={noop}>
          {formikApi => (
            <FormikTextFieldTypeAhead
              formikApi={formikApi}
              name="entryType"
              label="Entry Type"
              placeholder="Enter entry type here..."
              suggestions={["AFCAT", "NDA", "Paramilitary"]}
            />
          )}
        </TypedFormik>
      </ContentCenterWrapper>
    );
  }),
);
