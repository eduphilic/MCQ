import { css, styled } from "@join-uniform/theme";
import { keys as breakpointKeys } from "@material-ui/core/styles/createBreakpoints";
import React from "react";
import { Grid, GridProps } from "../Grid";
import { HiddenProps } from "../Hidden";

export type GridHideableProps = Omit<
  GridProps & HiddenProps,
  "component" | "implementation" | "initialWidth"
>;

/**
 * Adds the functionality from Material UI's Hidden component. This allows using
 * the CSS only implementation alongside Grid.
 *
 * This provides a workaround for service side rendering.
 */
export const GridHideable = styled((props: GridHideableProps) => {
  const {
    className,
    lgDown,
    lgUp,
    mdDown,
    mdUp,
    only,
    smDown,
    smUp,
    xlDown,
    xlUp,
    xsDown,
    xsUp,
    ...rest
  } = props;

  const classNames: string[] = [];
  if (className) classNames.push(className);

  // tslint:disable-next-line:prefer-for-of
  for (let i = 0; i < breakpointKeys.length; i += 1) {
    const breakpoint = breakpointKeys[i];
    const breakpointUp = props[`${breakpoint}Up` as keyof GridHideableProps];
    const breakpointDown = props[`${breakpoint}Down` as keyof GridHideableProps]; // prettier-ignore

    if (breakpointUp) {
      classNames.push(`hidden-${breakpoint}Up`);
    }
    if (breakpointDown) {
      classNames.push(`hidden-${breakpoint}Down`);
    }

    if (only) {
      const onlyBreakpoints = Array.isArray(only) ? only : [only];
      onlyBreakpoints.forEach(b => {
        classNames.push(`hidden-only-${b}`);
      });
    }
  }

  return <Grid {...rest} className={classNames.join(" ")} />;
})`
  ${breakpointKeys.map(
    key => css`
      ${({ theme }) => theme.breakpoints.only(key)} {
        &.hidden-only-${key} {
          display: none;
        }
      }

      ${({ theme }) => theme.breakpoints.up(key)} {
        &.hidden-${key}Up {
          display: none;
        }
      }

      ${({ theme }) => theme.breakpoints.down(key)} {
        &.hidden-${key}Down {
          display: none;
        }
      }
    `,
  )};
`;
