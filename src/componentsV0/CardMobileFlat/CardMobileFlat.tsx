import { fromMobileFlatBorder } from "css";
import React from "react";
import styled from "styled";

import Card, { CardProps } from "@material-ui/core/Card";

export type CardMobileFlatProps = CardProps;

export const CardMobileFlat = styled<CardProps>(props => <Card {...props} />)`
  ${fromMobileFlatBorder()};
`;
