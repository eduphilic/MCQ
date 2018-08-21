import { storiesOf } from "@storybook/react";
import React from "react";

import { formik } from "componentsV0/storybook/StorybookFormikAddon";
import { FormikFileUploadBase } from ".";

const initialValues = {
  someFile: null as File | null,
};

type Values = typeof initialValues;

storiesOf("Components", module)
  .addParameters({ formik: { initialValues } })
  .add("FormikFileUploadBase", () => {
    const api = formik<Values>();

    return (
      <FormikFileUploadBase<Values>
        formikApi={api}
        name="someFile"
        acceptedFileTypes="image/*"
      >
        {fileUploadApi => (
          <button onMouseDown={fileUploadApi.onMouseDown}>Upload File</button>
        )}
      </FormikFileUploadBase>
    );
  });
