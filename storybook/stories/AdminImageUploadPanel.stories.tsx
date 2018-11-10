import { storiesOf } from "@storybook/react";
import React from "react";
import { AdminImageUploadPanel } from "../../src/features/admin";

const stories = storiesOf("AdminImageUploadPanel", module);

stories.add("in card header", () => <AdminImageUploadPanel />);
