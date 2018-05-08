import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React from "react";
import { ResponsiveToolbarTypographyButton } from ".";

import Add from "@material-ui/icons/Add";
import Paper from "material-ui/Paper";
import Toolbar from "material-ui/Toolbar";
import { ContentCenterWrapper } from "../../atoms/ContentCenterWrapper";

storiesOf("Molecules", module).add(
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
