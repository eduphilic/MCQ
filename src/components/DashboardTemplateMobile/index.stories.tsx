import { storiesOf } from "@storybook/react";
import { navigationLinksAdmin } from "common/structures/navigationLinksAdmin";
import React from "react";
import { MemoryRouter } from "react-router-dom";

import { DashboardTemplateMobile } from ".";

const stories = storiesOf("Components", module);

stories.add("DashboardTemplateMobile", () => {
  return (
    <MemoryRouter initialEntries={["/dashboard"]}>
      <DashboardTemplateMobile
        appBarNode={() => <div>App Bar</div>}
        links={navigationLinksAdmin}
      />
    </MemoryRouter>
  );
});
