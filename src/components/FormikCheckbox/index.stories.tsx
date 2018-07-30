import { storiesOf } from "@storybook/react";
import React from "react";

import { formik } from "components/storybook/StorybookFormikAddon";
import { FormikCheckbox } from ".";

const initialValues = {
  someField: false,
};

type Values = typeof initialValues;

storiesOf("Components", module)
  .addParameters({ formik: { initialValues } })
  .add("FormikCheckbox", () => {
    const api = formik<Values>();

    return (
      <FormikCheckbox<Values>
        formikApi={api}
        name="someField"
        label="Some Field"
      />
    );
  });
