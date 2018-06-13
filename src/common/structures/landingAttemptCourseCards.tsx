import { landingAttemptCourseCardBackgrounds } from "common/structures/landingAttemptCourseCardBackgrounds";
import { fromPublicUrl } from "common/utils";
import { AttemptCourseCard } from "components/AttemptCourseCard";
import React, { ReactNode } from "react";

const defaultOptions = {
  // tslint:disable-next-line:no-empty
  courseOnClick: (_courseIndex: number) => {},
};

type Options = typeof defaultOptions;

export const landingAttemptCourseCards = (
  options: Options = defaultOptions,
) => {
  const cards: ReactNode[] = [];

  for (let i = 0; i < 3; i += 1) {
    cards.push(
      <AttemptCourseCard
        cardHeaderProps={{
          entry: "Army",
          label: "Army Mock Tests",
        }}
        courses={Array.from({ length: 11 }).map((_item, index) => ({
          courseTitle: "Soldier GD",
          onClick: () => options.courseOnClick(index),
          passText: "10th Pass",
        }))}
        backgroundImage={fromPublicUrl(
          `/images/index-card-backgrounds/${
            landingAttemptCourseCardBackgrounds[i]
          }`,
        )}
      />,
    );
  }

  return cards;
};
