import { fromToolbarHeight } from "css";
import styled from "styled";

export type ArrowTargetRowProps = {
  variant: "exam-half-toolbar" | "toolbar";
};

export const ArrowTargetRow = styled.div<ArrowTargetRowProps>`
  display: flex;
  width: 100vw;

  ${({ variant }) => (variant === "toolbar" ? toolbarHeight : `height: 32px;`)};
  ${({ variant }) => (variant === "toolbar" ? `` : `padding: 0 8px;`)};
`;

const toolbarHeight = fromToolbarHeight("height");
