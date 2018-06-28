import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import { StorybookContentCenterWrapper } from "components/storybook/StorybookContentCenterWrapper";
import { DashboardColumnContainer } from ".";

storiesOf("Components", module).add("DashboardColumnContainer", () => {
  const children = Array.from({ length: 10 }, (_, index) => (
    <div key={index} style={{ width: 200, height: 100 }}>
      Child {index.toString()}
    </div>
  ));

  return (
    <StorybookContentCenterWrapper>
      <DashboardColumnContainer interlaced={boolean("Interlaced", false)}>
        {children}
      </DashboardColumnContainer>
    </StorybookContentCenterWrapper>
  );
});
