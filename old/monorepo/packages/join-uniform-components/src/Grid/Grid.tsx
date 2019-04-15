import { css, styled } from "@join-uniform/theme";
import MuiGrid, { GridProps as MuiGridProps } from "@material-ui/core/Grid";
import React from "react";

export type GridProps = MuiGridProps & {
  /**
   * Centers container and sets a maximum width. Requires that the container
   * prop be set.
   */
  contentCenter?: boolean;

  /**
   * Applies the style from the `contentCenter` variant but with vertical
   * padding in addition to the horizontal padding from the contentCenter
   * setting.
   */
  storybookContainer?: boolean;
};

export const Grid = styled((props: GridProps) => {
  const {
    contentCenter: contentCenterProp,
    container: containerProp,
    storybookContainer,
    ...rest
  } = props;

  const contentCenter = !!contentCenterProp || !!storybookContainer;
  const container = !!containerProp || !!storybookContainer;

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
          padding: ${storybookContainer ? "8px 8px" : "0px 0px"};
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
