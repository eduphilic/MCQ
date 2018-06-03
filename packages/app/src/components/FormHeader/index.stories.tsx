import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React from "react";
import { FormHeader } from ".";

storiesOf("Components", module).add(
  "FormHeader",
  withInfo()(() => <FormHeader>Login</FormHeader>),
);
