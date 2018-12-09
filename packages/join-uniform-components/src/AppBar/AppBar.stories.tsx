import { storiesOf } from "@storybook/react";
import React from "react";
import { AppBar } from "./AppBar";

const stories = storiesOf("AppBar", module);
const noop = () => {
  //
};

stories.add("default", () => (
  <AppBar
    title="Join Uniform"
    onDrawerToggleButtonClick={noop}
    onLogoutButtonClick={noop}
  />
));
