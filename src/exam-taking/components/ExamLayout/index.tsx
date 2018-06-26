import React, { ReactNode, SFC } from "react";
import styled from "styled";

export interface ExamLayoutProps {
  headerNode: ReactNode;
}

export const ExamLayout: SFC<ExamLayoutProps> = props => {
  const { headerNode } = props;

  return <Wrapper>{headerNode}</Wrapper>;
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 8px;
  margin-top: 0 !important;
  margin-bottom: 0 !important;

  ${({ theme }) => theme.breakpoints.up("md")} {
    padding-top: 0;
  }
`;
