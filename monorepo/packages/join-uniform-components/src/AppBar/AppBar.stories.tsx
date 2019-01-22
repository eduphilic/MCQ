import { CloudUploadIcon } from "@join-uniform/icons";
import IconButton from "@material-ui/core/IconButton";
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

stories.add("with buttons", () => (
  <AppBar
    title="Join Uniform"
    buttons={[
      <IconButton key="upload">
        <CloudUploadIcon />
      </IconButton>,
    ]}
    onDrawerToggleButtonClick={noop}
    onLogoutButtonClick={noop}
  />
));
