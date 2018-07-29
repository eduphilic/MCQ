import { storiesOf } from "@storybook/react";
import { Formik, FormikProps } from "formik";
import React from "react";

import { FormikFileUploadBase } from ".";

// tslint:disable-next-line:no-empty
const noop = () => {};

const initialValues = {
  someFile: null as File | null,
};

type Values = typeof initialValues;

storiesOf("Components", module)
  .addParameters({ info: { propTables: [FormikFileUploadBase] } })
  .addDecorator(story => (
    <Formik initialValues={initialValues} onSubmit={noop}>
      {story()}
    </Formik>
  ))
  .add("FormikFileUploadBase", () => (api: FormikProps<Values>) => (
    <FormikFileUploadBase<Values>
      formikApi={api}
      name="someFile"
      acceptedFileTypes="image/*"
    >
      {fileUploadApi => (
        <button onMouseDown={fileUploadApi.onMouseDown}>Upload File</button>
      )}
    </FormikFileUploadBase>
  ));
