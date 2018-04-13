import React, { ReactNode, SFC } from "react";
import styled from "styled";
import { ContentCenterWrapper } from "../../atoms/ContentCenterWrapper";

interface Props {
  /** Hero section node. Image, text, and signup/sign-in forms. */
  heroNode: ReactNode;

  /** Product offering cards, main content. */
  testCardNodes: ReactNode[];

  /** Page footer. */
  footerNode: ReactNode;
}

/**
 * Page template for main landing page.
 */
export const LandingTemplate: SFC<Props> = props => {
  const { heroNode, testCardNodes, footerNode } = props;

  return (
    <>
      <HeaderHeroWrapper>{heroNode}</HeaderHeroWrapper>

      <ContentCenterWrapper>
        <MainCardsWrapper>
          {testCardNodes.map((testCard, key) => (
            <TestCardWrapper key={key}>{testCard}</TestCardWrapper>
          ))}
        </MainCardsWrapper>
      </ContentCenterWrapper>

      <FooterWrapper>
        <ContentCenterWrapper className="footer">
          {footerNode}
        </ContentCenterWrapper>
      </FooterWrapper>
    </>
  );
};

const HeaderHeroWrapper = styled.header`
  display: block;
  height: 0px;
  min-height: 600px;
`;

const TestCardWrapper = styled.div`
  padding: ${props => props.theme.spacing.unit * 2}px 0;
`;

const MainCardsWrapper = styled.main`
  display: block;
  padding: ${props => props.theme.spacing.unit * 2}px
    ${props => props.theme.spacing.unit * 4}px;
  padding-bottom: ${props => props.theme.spacing.unit * 5}px;
`;

const FooterWrapper = styled.footer`
  display: block;
  height: ${props => props.theme.spacing.unit * 4}px;

  .footer {
    height: 100%;
  }
`;
