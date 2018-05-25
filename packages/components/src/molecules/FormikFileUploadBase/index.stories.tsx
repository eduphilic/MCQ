import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import { Formik } from "formik";
import React from "react";

import { FormikFileUploadBase } from ".";

storiesOf("Molecules", module).add(
  "FormikFileUploadBase",
  withInfo({ propTables: [FormikFileUploadBase] })(() => {
    // tslint:disable-next-line:no-empty
    const noop = () => {};

    const initialValues = {
      someFile: null as File | null,
    };

    type Values = typeof initialValues;
    class TypedFormik extends Formik<{}, Values> {}

    return (
      <TypedFormik initialValues={initialValues} onSubmit={noop}>
        {api => (
          <FormikFileUploadBase
            formikApi={api}
            name="someFile"
            acceptedFileTypes="image/*"
          >
            {fileUploadApi => (
              <button onMouseDown={fileUploadApi.onMouseDown}>
                Upload File
              </button>
            )}
          </FormikFileUploadBase>
        )}
      </TypedFormik>
    );
  }),
);
