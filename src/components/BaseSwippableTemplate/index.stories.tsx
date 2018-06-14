import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React from "react";

import { BaseSwippableTemplate } from ".";

storiesOf("Components", module).add(
  "BaseSwippableTemplate",
  withInfo({ inline: false })(() => {
    const paneKeyNodeMap = Array.from({ length: 10 }).map((_item, index) => ({
      key: `node-${index}`,
      node: <div>Node {index}</div>,
    }));

    return (
      <div style={{ height: "100vh" }}>
        <BaseSwippableTemplate
          headerNode={<div>Header Node</div>}
          paneKeyNodeMap={paneKeyNodeMap}
          footerNode={<div>Footer Node</div>}
        />
      </div>
    );
  }),
);
