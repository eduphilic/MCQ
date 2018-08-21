import { storiesOf } from "@storybook/react";
import React from "react";

import Paper from "@material-ui/core/Paper";
import Toolbar from "@material-ui/core/Toolbar";
import Add from "@material-ui/icons/Add";

import { StorybookContentCenterWrapper } from "componentsV0/storybook/StorybookContentCenterWrapper";
import { ResponsiveToolbarTypographyButton } from ".";

storiesOf("Components", module)
  .addParameters({
    info: { propTablesExclude: [StorybookContentCenterWrapper] },
  })
  .add("ResponsiveToolbarTypographyButton", () => {
    //

    return (
      <StorybookContentCenterWrapper>
        <Paper>
          <Toolbar>
            <div style={{ flex: 1 }} />

            <ResponsiveToolbarTypographyButton
              color="orange"
              iconNode={<Add />}
              tooltipTitle="Add New Entry"
            >
              Entry
            </ResponsiveToolbarTypographyButton>
          </Toolbar>
        </Paper>
      </StorybookContentCenterWrapper>
    );
  });
