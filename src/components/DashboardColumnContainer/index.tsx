import React, { ReactElement, SFC } from "react";
import styled from "styled";

export interface DashboardColumnContainerProps {
  /**
   * Elements to arrange within columns.
   */
  children: ReactElement<any>[];
}

/**
 * Arranges the supplied children into columns. On mobile, the columns are
 * combined into a single column.
 */
export const DashboardColumnContainer: SFC<
  DashboardColumnContainerProps
> = props => {
  const { children } = props;

  const left = children.slice(0, Math.ceil(children.length / 2));
  const right = children.slice(Math.floor(children.length / 2));

  return (
    <FlexWrapper>
      <FlexColumn>{left}</FlexColumn>
      <FlexColumn>{right}</FlexColumn>
    </FlexWrapper>
  );
};

const FlexWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

const FlexColumn = styled.div`
  flex: 1;
  flex-basis: 100%;
  width: 100%;

  ${({ theme }) => theme.breakpoints.up("md")} {
    flex-basis: 0;
    width: 50%;

    &:first-child {
      margin-right: 12px;
    }

    &:last-child {
      margin-left: 12px;
    }
  }

  & > * {
    margin-bottom: ${({ theme }) => theme.spacing.unit * 3}px;
  }
`;
