import { storiesOf } from "@storybook/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";

import { DashboardTemplateMobile, DashboardTemplateMobileProps } from ".";
import { generateTemplateProps } from "../UserTemplate/generateTemplateProps";

const stories = storiesOf("Components", module);

stories.add("DashboardTemplateMobile", () => {
  const navigationLinkComponentMap: DashboardTemplateMobileProps["navigationLinkComponentMap"] = {
    "/page1": () => <div>Page Contents 1</div>,
    "/page2": () => <div>Page Contents 2</div>,
    "/page3": () => <div>Page Contents 3</div>,
    "/page4": () => <div>Page Contents 4</div>,
  };

  const { appBarNode, navigationLinks } = generateTemplateProps({
    showHamburgerButton: false,
  });

  const PageComponent = navigationLinkComponentMap["/page1"];

  return (
    <BrowserRouter>
      <DashboardTemplateMobile
        appBarNode={appBarNode}
        navigationLinks={navigationLinks}
        navigationLinkComponentMap={navigationLinkComponentMap}
      >
        <PageComponent />
      </DashboardTemplateMobile>
    </BrowserRouter>
  );
});
