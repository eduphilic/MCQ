import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";

import { UserTemplate } from ".";

storiesOf("Components", module).add(
  "UserTemplate",
  withInfo({ inline: false, propTablesExclude: [BrowserRouter] })(() => {
    //

    return (
      <BrowserRouter>
        <UserTemplate>Placeholder</UserTemplate>
      </BrowserRouter>
    );
  }),
);
