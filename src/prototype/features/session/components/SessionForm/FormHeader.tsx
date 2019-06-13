import React, { SFC } from "react";
import styled from "styled-components";

import Typography, { TypographyProps } from "@material-ui/core/Typography";

export type FormHeaderProps = TypographyProps;

const FormHeaderBase = styled(Typography)`
  font-size: 16px;
  font-weight: 500;
  text-transform: uppercase;
`;

/** Capitalized form header. */
export const FormHeader: SFC<FormHeaderProps> = props => (
  <FormHeaderBase {...props as any} component="h1" />
);
