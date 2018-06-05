import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React from "react";

import { DashboardTemplate } from ".";

storiesOf("Components", module).add(
  "DashboardTemplate",
  withInfo({ inline: false })(() => {
    //

    return (
      <DashboardTemplate
        appBarNode={<div>App Bar Node</div>}
        drawerContentsNode={<div>Drawer Contents Node</div>}
      >
        Placeholder
      </DashboardTemplate>
    );
  }),
);
