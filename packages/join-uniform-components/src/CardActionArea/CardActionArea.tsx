import { css, styled } from "@join-uniform/theme";

export const CardActionArea = styled.div`
  ${({ onClick }) =>
    onClick &&
    css`
      cursor: pointer;
    `};
`;
