import { styled } from "@join-uniform/theme";
import { lighten } from "@material-ui/core/styles/colorManipulator";
import { Breakpoint } from "@material-ui/core/styles/createBreakpoints";
import React, { FC, ReactNode } from "react";
import { cardTitleStyle } from "../adminTypography";
import { Typography, TypographyProps } from "../muiComponents";

export type IndexCardProps = {
  title: string;
  categories: string[];
  /** This should be provided as a responsive 128px by 128px image. */
  entryLogoUrl: string;

  colorBlock: string;
  colorCategoryBackground: string;
  colorLogoBackground: string;
  colorTitle: string;
};

export function IndexCard(props: IndexCardProps) {
  const {
    title,
    categories,
    entryLogoUrl,
    colorBlock,
    colorCategoryBackground,
    colorLogoBackground,
    colorTitle,
  } = props;

  return (
    <Wrapper backgroundColor={colorBlock}>
      <InnerWrapper backgroundColor={colorBlock}>
        <EntryLogoImage
          backgroundColor={colorLogoBackground}
          src={entryLogoUrl}
        />

        <TextSectionWrapper>
          <TitleWrapper>
            <TitleTypography>{title}</TitleTypography>
            <Typography>mock test for:</Typography>
          </TitleWrapper>

          <CategoryPillWrapper>
            {categories.map((category, index) => (
              <CategoryPill
                key={index}
                backgroundColor={colorCategoryBackground}
                textColor={colorTitle}
                title={category}
              />
            ))}
          </CategoryPillWrapper>
        </TextSectionWrapper>
      </InnerWrapper>
    </Wrapper>
  );
}

const logoSizePixels = 128;
const blockWidthPixels = logoSizePixels + logoSizePixels / 2;
const verticalMargin = 50;
const mobileBreakpoint: Breakpoint = "sm";

const Wrapper = styled.div<{ backgroundColor: string }>`
  width: 100%;
  padding: 16px;
  background-color: ${props => getLightBg(props.backgroundColor)};

  > * {
    max-width: 1280px;
    margin: 0 auto;
  }
`;

const InnerWrapper = styled(
  (props: {
    children?: ReactNode;
    className?: string;
    backgroundColor: string;
  }) => <div className={props.className}>{props.children}</div>,
)`
  display: flex;
  padding-left: ${logoSizePixels}px;

  ${({ backgroundColor, theme }) => `
    background-image: linear-gradient(
      to right,
      ${backgroundColor},
      ${backgroundColor} ${blockWidthPixels}px,
      ${getLightBg(backgroundColor)} ${blockWidthPixels}px,
      ${getLightBg(backgroundColor)}
    );

    ${theme.breakpoints.down(mobileBreakpoint)} {
      flex-direction: column;
      align-items: center;
      padding-left: 0;
      padding-top: ${verticalMargin}px;
      background-image: linear-gradient(
        to bottom,
        ${backgroundColor},
        ${backgroundColor} ${verticalMargin + logoSizePixels / 2}px,
        ${getLightBg(backgroundColor)} ${verticalMargin + logoSizePixels / 2}px,
        ${getLightBg(backgroundColor)}
      );
    }
  `};
`;

const EntryLogoImage = styled.img<{
  backgroundColor: string;
}>`
  display: block;
  width: ${logoSizePixels}px;
  height: ${logoSizePixels}px;
  margin: ${verticalMargin}px 0;
  background-color: ${({ backgroundColor }) => `${backgroundColor}`};

  ${({ theme }) => theme.breakpoints.down(mobileBreakpoint)} {
    margin: 0;
  }
`;

const TextSectionWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 24px 0;
  margin-left: 16px;

  ${({ theme }) => theme.breakpoints.down(mobileBreakpoint)} {
    margin-left: 0;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: baseline;
  margin-left: 8px;
  margin-bottom: 16px;

  > :first-child {
    margin-right: 8px;
  }

  ${({ theme }) => theme.breakpoints.down(mobileBreakpoint)} {
    flex-direction: column;
    align-items: center;
    margin-left: 0;

    > :first-child {
      margin-right: 0;
    }
  }
`;

const TitleTypography = styled(Typography as FC<TypographyProps>)`
  ${cardTitleStyle};
`;

const CategoryPillWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const CategoryPill = styled(
  ({
    className,
    title,
  }: {
    className?: string;
    backgroundColor: string;
    textColor: string;
    title: string;
  }) => (
    <div className={className}>
      <Typography>{title}</Typography>
    </div>
  ),
)`
  width: calc(100% / 3 - 16px);
  padding: 8px;
  margin: 8px;
  border-radius: 8px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  text-align: center;

  ${({ theme }) => theme.breakpoints.down(mobileBreakpoint)} {
    width: calc(100% / 2 - 16px);
  }
`;

function getLightBg(color: string) {
  return lighten(color, 0.4);
}
