import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React from "react";

import { UserTemplate } from ".";

storiesOf("Components", module).add(
  "UserTemplate",
  withInfo({ inline: false })(() => {
    //

    return <UserTemplate>Placeholder</UserTemplate>;
  }),
);
