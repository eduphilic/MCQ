import { fromGutters } from "css";
import styled, { withProps } from "styled";

export type PageContentWrapperProps = {
  verticalGutters?: boolean;
};

export const PageContentWrapper = withProps<PageContentWrapperProps>()(
  styled.div,
)`
  ${({ verticalGutters }) =>
    verticalGutters && fromGutters(["margin-bottom"], "> *:not(:last-child)")}

  width: 100%;
  max-width: 1280px;
  padding: 16px 8px;
  margin: 0 auto;

  ${({ theme }) => theme.breakpoints.up("sm")} {
    padding: 16px;
  }
`;

PageContentWrapper.displayName = "PageContentWrapper";
