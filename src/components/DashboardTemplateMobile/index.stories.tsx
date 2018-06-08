import { storiesOf } from "@storybook/react";
import React from "react";

import { DashboardTemplateMobile } from ".";
import { generateTemplateProps } from "../UserTemplate/generateTemplateProps";

const stories = storiesOf("Components", module);

stories.add("DashboardTemplateMobile", () => {
  const { appBarNode } = generateTemplateProps({ showHamburgerButton: false });

  return (
    <DashboardTemplateMobile appBarNode={appBarNode}>
      <div>PageContents</div>
    </DashboardTemplateMobile>
  );
});
