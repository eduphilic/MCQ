import { IndexCard } from "@join-uniform/components";
import { LightTheme } from "@join-uniform/theme";
import React, { useMemo } from "react";
import { createResponsiveImageUrl } from "../utils";

export type IndexCardsSectionProps = {
  indexCards: {
    title: string;
    entryLogoUrl: string;
    categories: string[];
    colorBlock: string;
    colorCategoryBackground: string;
    colorLogoBackground: string;
    colorTitle: string;
  }[];
};

export function IndexCardsSection(props: IndexCardsSectionProps) {
  const { indexCards } = props;

  const optimizedIndexCards = useMemo(
    () =>
      indexCards.map(
        (indexCard): IndexCardsSectionProps["indexCards"][0] => ({
          ...indexCard,
          entryLogoUrl: createResponsiveImageUrl(indexCard.entryLogoUrl, {
            w: "128",
            h: "128",
            q: "50",
            format: "jpg",
          }),
        }),
      ),
    [indexCards],
  );

  return (
    <LightTheme>
      <>
        {optimizedIndexCards.map((indexCard, index) => (
          <IndexCard key={index} {...indexCard} />
        ))}
      </>
    </LightTheme>
  );
}
