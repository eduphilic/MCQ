import React, { ReactNode, SFC } from "react";
import styled from "styled";
import { ContentCenterWrapper } from "../../atoms/ContentCenterWrapper";

export interface LandingTemplateProps {
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
export const LandingTemplate: SFC<LandingTemplateProps> = props => {
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

      <FooterWrapper>{footerNode}</FooterWrapper>
    </>
  );
};

const HeaderHeroWrapper = styled.header`
  display: block;
`;

const TestCardWrapper = styled.div`
  padding: ${props => props.theme.spacing.unit * 2}px 0;
`;

const MainCardsWrapper = styled.main`
  display: block;
  padding: ${props => props.theme.spacing.unit * 2}px 0;
  padding-bottom: ${props => props.theme.spacing.unit * 5}px;
`;

const FooterWrapper = styled.footer`
  display: block;
  max-height: ${props => props.theme.spacing.unit * 5}px;
  overflow: hidden;
`;
