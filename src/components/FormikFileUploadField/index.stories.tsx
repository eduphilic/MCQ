import { storiesOf } from "@storybook/react";
import { Formik, FormikProps } from "formik";
import React from "react";

import { ContentCenterWrapper } from "components/ContentCenterWrapper";
import { FormikFileUploadField } from ".";

// tslint:disable-next-line:no-empty
const noop = () => {};

const initialValues = {
  logoImage: null as File | null,
};

type Values = typeof initialValues;

storiesOf("Components", module)
  .addParameters({
    info: { propTables: [FormikFileUploadField], propTablesExclude: [Formik] },
  })
  .addDecorator(story => (
    <Formik initialValues={initialValues} onSubmit={noop}>
      {story()}
    </Formik>
  ))
  .add("FormikFileUploadField", () => (api: FormikProps<Values>) => (
    <ContentCenterWrapper>
      <FormikFileUploadField<Values>
        formikApi={api}
        name="logoImage"
        label="Logo Image"
        acceptedFileTypes="image/*"
      />

      <div style={{ marginTop: 24 }} />

      <FormikFileUploadField<Values>
        formikApi={api}
        name="logoImage"
        label="Logo Image"
        acceptedFileTypes="image/*"
        iconOnly
      />
    </ContentCenterWrapper>
  ));
