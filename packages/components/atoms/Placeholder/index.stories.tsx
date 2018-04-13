import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React from "react";

storiesOf("Atoms", module).add(
  "Placeholder",
  withInfo()(() => <div>Placeholder</div>),
);
