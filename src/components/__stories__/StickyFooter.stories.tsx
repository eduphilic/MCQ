import { storiesOf } from "@storybook/react";
import React from "react";
import { StickyFooter } from "../StickyFooter";

const stories = storiesOf("StickyFooter", module);

stories.add("default", () => {
  return <StickyFooter>StickyFooter</StickyFooter>;
});
