import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React, { cloneElement, Fragment } from "react";
import styled from "styled";

import { Button, ButtonProps } from ".";
import { ContentCenterWrapper } from "../ContentCenterWrapper";
import { Typography } from "../Typography";

storiesOf("Components", module).add(
  "Button",
  withInfo()(() => (
    <Wrapper>
      {/* Colors */}
      {[
        [undefined, "Button"],
        ["primary", "Green Button"],
        ["orange", "Orange Button"],
        ["red", "Red Button"],
        ["blue", "Blue Button"],
        ["yellow", "Yellow Button"],
      ].map(([color, label]) =>
        // Raised and flat variants
        ["raised", "flat"].map(variant => {
          const button = (
            <Button
              color={color as ButtonProps["color"]}
              variant={variant as ButtonProps["variant"]}
            >
              <Typography variant="buttonBold">{label}</Typography>
            </Button>
          );
          const filledButton = cloneElement(button, { filled: true });

          return (
            <Fragment key={`${label}-${variant}`}>
              {button}
              <div>{filledButton} - filled</div>
            </Fragment>
          );
        }),
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