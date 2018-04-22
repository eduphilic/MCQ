import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React from "react";
import { AdminPanelUsersSummary } from ".";
import { createPlaceholderAdminPanelUsersSummaryProps } from "./createPlaceholderAdminPanelUsersSummaryProps";

storiesOf("Organisms", module).add(
  "AdminPanelUsersSummary",
  withInfo()(() => {
    const props = createPlaceholderAdminPanelUsersSummaryProps();

    return (
      <div style={{ width: 600, margin: 24 }}>
        <AdminPanelUsersSummary {...props} />
      </div>
    );
  }),
);
