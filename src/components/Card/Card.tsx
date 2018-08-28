import { fromMobileFlatBorder } from "css";
import React from "react";
import styled from "styled";

// tslint:disable-next-line:import-name
import MuiCard, { CardProps as MuiCardProps } from "@material-ui/core/Card";

export type CardProps = Omit<MuiCardProps, "innerRef"> & {
  /**
   * Add a hover animation on mouse over.
   */
  hoverable?: boolean;
};

export const Card = styled<CardProps>(props => <MuiCard {...props} />)`
  ${fromMobileFlatBorder()};

  transition: ${({ theme }) =>
    theme.transitions.create("box-shadow", {
      duration: theme.transitions.duration.short,
    })};

  ${({ hoverable, theme }) =>
    hoverable &&
    `
      &:hover {
        box-shadow: ${theme.shadows[2]};
      }

      ${theme.breakpoints.up("md")} {
        &:hover {
          box-shadow: ${theme.shadows[4]};
        }
      }
    `};
`;
