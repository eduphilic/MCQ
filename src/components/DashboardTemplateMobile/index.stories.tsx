import { storiesOf } from "@storybook/react";
import { navigationLinksUser } from "common/structures/navigationLinksUser";
import React from "react";
import { MemoryRouter } from "react-router-dom";

import { DashboardTemplateMobile } from ".";
import { generateTemplateProps } from "../UserTemplate/generateTemplateProps";

const stories = storiesOf("Components", module);

stories.add("DashboardTemplateMobile", () => {
  const { appBarNode } = generateTemplateProps({ showHamburgerButton: false });

  return (
    <MemoryRouter initialEntries={["/dashboard"]}>
      <DashboardTemplateMobile
        appBarNode={appBarNode}
        links={navigationLinksUser}
      />
    </MemoryRouter>
  );
});
