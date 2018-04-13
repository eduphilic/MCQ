import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React from "react";
import { PlaceholderImage } from ".";

storiesOf("Atoms", module).add(
  "PlaceholderImage",
  withInfo()(() => <PlaceholderImage />),
);
