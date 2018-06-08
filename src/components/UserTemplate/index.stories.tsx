import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";

import { UserTemplate, UserTemplateProps } from ".";

storiesOf("Components", module).add(
  "UserTemplate",
  withInfo({ inline: false, propTablesExclude: [BrowserRouter] })(() => {
    const navigationLinkComponentMap: UserTemplateProps["navigationLinkComponentMap"] = {
      "/dashboard": () => <div>Page Contents 1</div>,
      "/exam-pack": () => <div>Page Contents 2</div>,
      "/membership": () => <div>Page Contents 3</div>,
      "/settings": () => <div>Page Contents 4</div>,
    };

    const PageComponent = navigationLinkComponentMap["/dashboard"];

    return (
      <div style={{ height: "100vh" }}>
        <BrowserRouter>
          <UserTemplate navigationLinkComponentMap={navigationLinkComponentMap}>
            <PageComponent />
          </UserTemplate>
        </BrowserRouter>
      </div>
    );
  }),
);
