import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";

import { UserTemplate, UserTemplateProps } from ".";

storiesOf("Components", module).add(
  "UserTemplate",
  withInfo({ inline: false, propTablesExclude: [BrowserRouter] })(() => {
    const navigationLinkComponentMap: UserTemplateProps["navigationLinkComponentMap"] = {
      "/page1": () => <div>Page Contents 1</div>,
      "/page2": () => <div>Page Contents 2</div>,
      "/page3": () => <div>Page Contents 3</div>,
      "/page4": () => <div>Page Contents 4</div>,
    };

    const PageComponent = navigationLinkComponentMap["/page1"];

    return (
      <BrowserRouter>
        <UserTemplate navigationLinkComponentMap={navigationLinkComponentMap}>
          <PageComponent />
        </UserTemplate>
      </BrowserRouter>
    );
  }),
);
