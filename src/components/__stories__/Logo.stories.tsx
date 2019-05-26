import { storiesOf } from "@storybook/react";
import React from "react";
import { Logo } from "../Logo";

const stories = storiesOf("Logo", module);

stories.add("default", () => {
  return <Logo />;
});

stories.add("large", () => {
  return <Logo size={64} />;
});

stories.add("two tone", () => {
  return <Logo twoTone />;
});

stories.add("shadowed", () => {
  return <Logo shadowed />;
});
