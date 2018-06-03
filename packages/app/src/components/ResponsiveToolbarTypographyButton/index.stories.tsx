import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React from "react";
import { ResponsiveToolbarTypographyButton } from ".";

import Paper from "@material-ui/core/Paper";
import Toolbar from "@material-ui/core/Toolbar";
import Add from "@material-ui/icons/Add";
import { ContentCenterWrapper } from "components/ContentCenterWrapper";

storiesOf("Components", module).add(
  "ResponsiveToolbarTypographyButton",
  withInfo({ propTablesExclude: [ContentCenterWrapper as any] })(() => {
    //

    return (
      <ContentCenterWrapper>
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
      </ContentCenterWrapper>
    );
  }),
);
