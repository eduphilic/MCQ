import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import { PostSignupDialogs } from "./PostSignupDialogs";

storiesOf("Dashboard", module).add("PostSignupDialogs", () => {
  const showDialogs = boolean("Show Dialogs", false);

  return showDialogs ? <PostSignupDialogs /> : (null as any);
});
