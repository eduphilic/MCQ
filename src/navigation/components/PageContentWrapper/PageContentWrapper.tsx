import { fromGutters } from "css";
import styled, { withProps } from "styled";

export type PageContentWrapperProps = {
  verticalGutters?: boolean;
};

export const PageContentWrapper = withProps<PageContentWrapperProps>()(
  styled.div,
)`
  ${fromGutters(["padding-left", "padding-right", "padding-top"])};
  ${({ verticalGutters }) =>
    verticalGutters && fromGutters(["margin-bottom"], "> *:not(:last-child)")}

  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
`;
