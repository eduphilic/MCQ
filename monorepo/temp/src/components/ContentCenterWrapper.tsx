import { styled } from "../styled";

/**
 * Container with a maximum width, centered on the screen. Includes inner
 * padding.
 */
export const ContentCenterWrapper = styled.div`
  width: 100%;
  max-width: ${props => props.theme.breakpoints.values.lg}px;
  padding: 0 ${props => props.theme.spacing.unit * 2}px;
  margin: 0 auto;
`;
