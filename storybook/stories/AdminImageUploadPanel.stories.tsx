import { storiesOf } from "@storybook/react";
import React from "react";
import { AdminImageUploadPanel } from "../../src/features/admin";

const stories = storiesOf("AdminImageUploadPanel", module);

stories.addDecorator(story => <div style={{ margin: 16 }}>{story()}</div>);

stories.add("in card header", () => <AdminImageUploadPanel />);
