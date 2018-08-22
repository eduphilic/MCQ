import { fromMobileFlatBorder } from "css";
import React from "react";
import styled from "styled";

// tslint:disable-next-line:import-name
import MuiCard, { CardProps as MuiCardProps } from "@material-ui/core/Card";

export type CardProps = Omit<MuiCardProps, "innerRef">;

export const Card = styled<CardProps>(props => <MuiCard {...props} />)`
  ${fromMobileFlatBorder()};
`;
