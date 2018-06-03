import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React from "react";
import { ToolbarProfileMenu } from ".";

storiesOf("Components", module).add(
  "ToolbarProfileMenu",
  withInfo()(() => (
    <div style={{ display: "flex", padding: 20, backgroundColor: "#eee" }}>
      <div style={{ backgroundColor: "#fff" }}>
        <ToolbarProfileMenu
          toolbarAvatarProps={{
            letters: "JD",
            name: "John Doe",
          }}
          onLogoutClick={action("onLogoutClick")}
        />
      </div>
    </div>
  )),
);
