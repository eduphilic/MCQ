import { ContentCenterWrapper } from "components/ContentCenterWrapper";
import React, { SFC } from "react";
import styled from "styled";

type GetProps<T> = T extends React.ComponentClass<infer U> ? U : never;
type ContentCenterWrapperProps = Omit<
  GetProps<typeof ContentCenterWrapper>,
  "ref"
>;

export type StorybookContentCenterWrapperProps = ContentCenterWrapperProps & {
  maxWidthPercent?: number;
};

/**
 * Wraps ContentCenterWrapper in for use with Storybook stories. It sets a white
 * background and allows for limiting the final width of the displayed
 * component. This is useful to simulate the component being in a column layout.
 */
export const StorybookContentCenterWrapper: SFC<
  StorybookContentCenterWrapperProps
> = ({ children, maxWidthPercent, ...rest }) => (
  <Wrapper {...rest}>
    <ComponentWrapper>{children}</ComponentWrapper>

    <Spacer maxWidthPercent={maxWidthPercent} />
    <BodyBackgroundColor />
  </Wrapper>
);

const Wrapper = styled(ContentCenterWrapper)`
  display: flex;
  padding: 0 16px;
`;

const ComponentWrapper = styled.div`
  flex: 1;
`;

const Spacer = styled.div<
  Pick<StorybookContentCenterWrapperProps, "maxWidthPercent">
>`
  ${({ maxWidthPercent }) =>
    maxWidthPercent && `width: ${100 - maxWidthPercent}%`};
`;

const BodyBackgroundColor = () => (
  <style
    dangerouslySetInnerHTML={{
      __html: `
                body {
                  background-color: #fff;
                }
              `,
    }}
  />
);
