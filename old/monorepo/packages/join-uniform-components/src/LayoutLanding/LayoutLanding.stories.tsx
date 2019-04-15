import { storiesOf } from "@storybook/react";
import React from "react";
import { LayoutLanding } from "./LayoutLanding";

const stories = storiesOf("LayoutLanding", module);

stories.add("default", () => <LayoutLanding />);
