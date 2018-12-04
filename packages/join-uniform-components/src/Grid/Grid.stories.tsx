import { styled } from "@join-uniform/theme";
import Button, { ButtonProps } from "@material-ui/core/Button";
import { storiesOf } from "@storybook/react";
import React, { FC } from "react";

const stories = storiesOf("Grid", module);

stories.add("default", () => <StyledButton>Placeholder</StyledButton>);

const StyledButton = styled(Button as FC<ButtonProps>)`
  color: red;
`;
