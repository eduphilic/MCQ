import { storiesOf } from "@storybook/react";
import React from "react";
import { DemoComponent } from "./DemoComponent";

const stories = storiesOf("DemoComponent", module);

stories.add("default", () => <DemoComponent />);
