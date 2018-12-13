import { css, styled } from "@join-uniform/theme";
import MuiGrid, { GridProps as MuiGridProps } from "@material-ui/core/Grid";
import React from "react";

export type GridProps = MuiGridProps & {
  /**
   * Centers container and sets a maximum width. Requires that the container
   * prop be set.
   */
  contentCenter?: boolean;
};

export const Grid = styled((props: GridProps) => {
  const { contentCenter, container, ...rest } = props;

  if (contentCenter && !container) {
    throw new Error(
      "The container prop must be set to true to use contentCenter.",
    );
  }

  let element = <MuiGrid container={container} {...rest} />;

  if (contentCenter) {
    element = (
      <div
        css={css`
          padding: 0 8px;
        `}
      >
        {element}
      </div>
    );
  }

  return element;
})`
  ${props =>
    props.contentCenter &&
    css`
      width: 100%;
      max-width: 1280px;
      margin-left: auto;
      margin-right: auto;
    `};
`;
