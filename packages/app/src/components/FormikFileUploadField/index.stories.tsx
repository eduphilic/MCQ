import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import { Formik } from "formik";
import React from "react";

import { ContentCenterWrapper } from "components/ContentCenterWrapper";
import { FormikFileUploadField } from ".";

storiesOf("Components", module).add(
  "FormikFileUploadField",
  withInfo()(() => {
    // tslint:disable-next-line:no-empty
    const noop = () => {};

    const initialValues = {
      logoImage: null as File | null,
    };

    type Values = typeof initialValues;
    class TypedFormik extends Formik<{}, Values> {}

    return (
      <ContentCenterWrapper>
        <TypedFormik initialValues={initialValues} onSubmit={noop}>
          {api => (
            <FormikFileUploadField
              formikApi={api}
              name="logoImage"
              label="Logo Image"
              acceptedFileTypes="image/*"
            />
          )}
        </TypedFormik>

        <div style={{ marginTop: 24 }} />

        <TypedFormik initialValues={initialValues} onSubmit={noop}>
          {api => (
            <FormikFileUploadField
              formikApi={api}
              name="logoImage"
              label="Logo Image"
              acceptedFileTypes="image/*"
              iconOnly
            />
          )}
        </TypedFormik>
      </ContentCenterWrapper>
    );
  }),
);
