import { drawerWidth, fromToolbarHeight } from "css";
import React, { ReactNode } from "react";
import styled from "styled";

export type BottomToolbarDockProps = {
  className?: string;
  toolbarNode: ReactNode;
};

export const BottomToolbarDock = styled<BottomToolbarDockProps>(props => {
  const { className, children, toolbarNode } = props;

  return (
    <div className={className}>
      <ToolbarWrapper>{toolbarNode}</ToolbarWrapper>

      {children}

      <ToolbarSpacer />
    </div>
  );
})`
  width: 100%;
  height: 100%;
  overflow-y: auto;
`;

const ToolbarSpacer = styled.div`
  ${fromToolbarHeight("height", height => `${height - 8}px`)};
`;

const ToolbarWrapper = styled.div`
  ${fromToolbarHeight("height")};

  position: fixed;
  width: 100%;
  left: 0;
  bottom: 0;
  z-index: 1;

  ${({ theme }) => theme.breakpoints.up("md")} {
    padding-left: ${drawerWidth}px;
  }
`;
