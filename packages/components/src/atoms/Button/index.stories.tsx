import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React from "react";
import styled from "styled";

import { Button, ButtonProps } from ".";
import { ContentCenterWrapper } from "../ContentCenterWrapper";
import { Typography } from "../Typography";

storiesOf("Atoms", module).add(
  "Button",
  withInfo()(() => (
    <Wrapper>
      {/* Colors */}
      {[
        [undefined, "Button"],
        ["orange", "Orange Button"],
        ["red", "Red Button"],
        ["blue", "Blue Button"],
      ].map(([color, label]) =>
        // Raised and flat variants
        ["raised", "flat"].map(variant => (
          <Button
            key={`${label}-${variant}`}
            color={color as ButtonProps["color"]}
            variant={variant as ButtonProps["variant"]}
          >
            <Typography variant="buttonBold">{label}</Typography>
          </Button>
        )),
      )}
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
