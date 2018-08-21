import { storiesOf } from "@storybook/react";
import React from "react";

import { Typography } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";

import { StorybookContentCenterWrapper } from "../storybook/StorybookContentCenterWrapper";
import { CardMobileFlat } from "./CardMobileFlat";

storiesOf("Components", module)
  .addDecorator(story => (
    <StorybookContentCenterWrapper>{story()}</StorybookContentCenterWrapper>
  ))
  .add("CardMobileFlat", () => {
    //

    return (
      <CardMobileFlat>
        <CardContent>
          <Typography color="textSecondary">Word of the Day</Typography>
        </CardContent>
      </CardMobileFlat>
    );
  });
