import { storiesOf } from "@storybook/react";
import React from "react";

import { AppLayout } from "./AppLayout";

storiesOf("Navigation", module).add("AppLayout", () => {
  //

  return <AppLayout navDrawerTheme="UserAppDrawerTheme" />;
});
