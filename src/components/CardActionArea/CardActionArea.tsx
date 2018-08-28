import styled from "styled";

export const CardActionArea = styled.div`
  ${({ onClick }) => onClick && "cursor: pointer"};
`;
