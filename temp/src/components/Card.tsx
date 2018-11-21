import MuiCard, { CardProps as MuiCardProps } from "@material-ui/core/Card";
import React, { Children, Component, ReactNode } from "react";
import { styled } from "../styled";
import { CardActionArea } from "./CardActionArea";

export type CardProps = Omit<MuiCardProps, "innerRef"> & {
  /**
   * Add a hover animation on mouse over.
   */
  hoverable?: boolean;
};

class CardBase extends Component<CardProps> {
  render() {
    const { children, hoverable, ...rest } = this.props;

    if (hoverable && process.env.NODE_ENV === "development") {
      const hasActionArea = hasChildCardActionAreaComponent(children);
      if (!hasActionArea) {
        throw new Error(
          "Expected a child CardActionArea component when using the 'hoverable' style.",
        );
      }
    }

    return <MuiCard {...rest}>{children}</MuiCard>;
  }
}

/**
 * Recursively checks children in search of an instance of the CardActionArea
 * component.
 *
 * @param children Children of current tree.
 */
const hasChildCardActionAreaComponent = (children: ReactNode): boolean => {
  return Children.toArray(children).some(child => {
    // Not a text node.
    if (typeof child !== "string" && typeof child !== "number") {
      // Not a native element and display name matches.
      if (
        typeof child.type !== "string" &&
        child.type.displayName === CardActionArea.displayName
      ) {
        return true;
      }

      // Native element or component.
      return hasChildCardActionAreaComponent(child.props.children);
    }

    // Text node.
    return false;
  });
};

export const Card = styled(CardBase)`
  ${({ theme }) => theme.breakpoints.down("sm")} {
    box-shadow: none;
    border: 1px solid #dadce0;
    border-radius: 4px;
  }

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