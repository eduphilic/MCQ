import { storiesOf } from "@storybook/react";
import React from "react";

import { ContentCenterWrapper } from "componentsV0/ContentCenterWrapper";
import { formik } from "componentsV0/storybook/StorybookFormikAddon";
import { FormikFileUploadField } from ".";

const initialValues = {
  logoImage: null as File | null,
};

type Values = typeof initialValues;

storiesOf("Components V0", module)
  .addParameters({ formik: { initialValues } })
  .add("FormikFileUploadField", () => {
    const api = formik<Values>();

    return (
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
    );
  });
