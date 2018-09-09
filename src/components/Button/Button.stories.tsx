import { storiesOf } from "@storybook/react";
import React from "react";
import styled from "styled";

import { Button, colors } from "./Button";

storiesOf("Components", module).add("Button", () => {
  //

  return (
    <div>
      <Wrapper>
        {colors.map(color => (
          <Button key={color} color={color}>
            {capitalize(color)}
          </Button>
        ))}
      </Wrapper>
    </div>
  );
});

const Wrapper = styled.div`
  padding: 7rem;
  background-color: #eee;

  &:not(:last-child) {
    margin-bottom: 24px;
  }

  button:not(:last-child) {
    margin-right: 16px;
  }
`;

const capitalize = (text: string) =>
  `${text.charAt(0).toUpperCase()}${text.slice(1)}`;
