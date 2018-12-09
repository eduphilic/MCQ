import { storiesOf } from "@storybook/react";
import React from "react";
import { LogoText } from "./LogoText";

const stories = storiesOf("LogoText", module);

stories.add("default", () => <LogoText />);

stories.add("split color", () => <LogoText variant="split-color" />);
