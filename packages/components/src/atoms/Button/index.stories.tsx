import { withInfo } from "@storybook/addon-info";
import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import styled from "styled";
import { Button } from ".";
import { ContentCenterWrapper } from "../ContentCenterWrapper";
import { Typography } from "../Typography";

storiesOf("Atoms", module).add(
  "Button",
  withInfo()(() => (
    <Wrapper>
      <Button {...(boolean("Flat", false) ? { variant: "flat" } : {})}>
        Button
      </Button>

      <Button color="orange">
        <Typography variant="buttonBold">Orange Button</Typography>
      </Button>

      <Button color="orange" variant="flat">
        <Typography variant="buttonBold">Orange Button</Typography>
      </Button>
    </Wrapper>
  )),
);

const Wrapper = styled(ContentCenterWrapper)`
  > * {
    display: block;
  }

  > *:not(:last-child) {
    margin-bottom: 24px;
  }
`;
