import { storiesOf } from "@storybook/react";
import { Formik } from "formik";
import React from "react";

import { Button } from "components/Button";
import { StorybookContentCenterWrapper } from "components/storybook/StorybookContentCenterWrapper";
import { PostSignupDialogs } from "./PostSignupDialogs";

storiesOf("Dashboard", module)
  .addDecorator(story => (
    <StorybookContentCenterWrapper>{story()}</StorybookContentCenterWrapper>
  ))
  .add("PostSignupDialogs", () => (
    <Formik
      initialValues={{ showDialogs: false, key: 0 }}
      // tslint:disable-next-line:no-empty
      onSubmit={() => {}}
    >
      {formikBag => (
        <>
          <Button onClick={() => formikBag.setFieldValue("showDialogs", true)}>
            Show Dialogs
          </Button>

          {formikBag.values.showDialogs && (
            <PostSignupDialogs
              onSubmit={() => {
                formikBag.setFieldValue("key", formikBag.values.key + 1);
                formikBag.setFieldValue("showDialogs", false);
              }}
            />
          )}
        </>
      )}
    </Formik>
  ));
