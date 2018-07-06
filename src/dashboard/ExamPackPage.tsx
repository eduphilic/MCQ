import { entryImages } from "common/structures/entryImages";
import React, { SFC } from "react";

import { DashboardColumnContainer } from "components/DashboardColumnContainer";
import {
  DashboardTestCard,
  DashboardTestCardProps,
} from "components/DashboardTestCard";
import { DashboardTestCardColumnHeader } from "components/DashboardTestCardColumnHeader";

export const ExamPackPage: SFC<{}> = () => {
  const paidExams: DashboardTestCardProps[] = [
    {
      imageLogoUrl: entryImages.AirForce,
      title: "Soldier General Duty 10 Mock Tests Set",
      subtitle: "Validity 31st Jan 2019",
      stats: { Attempted: "02 Tests", Remaining: "08 Tests" },
    },
    {
      imageLogoUrl: entryImages.Army,
      title: "Airmen Group X 20 Mock Tests Set",
      subtitle: "Validity 31st Jan 2019",
      stats: {
        Attempted: "02 Tests",
        Remaining: "08 Tests",
      },
    },
    {
      imageLogoUrl: entryImages.AssamRifles,
      title: "Sailor Airificer Apprentice 20 Mock Tests Set",
      subtitle: "Validity 31st Jan 2019",
      stats: {
        Attempted: "02 Tests",
        Remaining: "08 Tests",
      },
    },
  ];

  const examDetails: DashboardTestCardProps[] = [
    {
      imageLogoUrl: entryImages.AirForce,
      title: "Soldier General Duty 10 Mock Tests Set",
      subtitle: "Validity 31st Jan 2019",
      reviseButtonLabel: "Review",
      stats: {
        Attempts: "2345 Users",
        Score: "75/200",
        Rank: "733/ Out 2345",
      },
    },
    {
      imageLogoUrl: entryImages.Army,
      title: "Airmen Group X 20 Mock Tests Set",
      subtitle: "Validity 31st Jan 2019",
      attemptButtonLabel: "Attempt",
      stats: {
        Attempts: "2345 Users",
        Score: "-",
        Rank: "-",
      },
    },
    {
      imageLogoUrl: entryImages.AssamRifles,
      title: "Sailor Airificer Apprentice 20 Mock Tests Set",
      subtitle: "Validity 31st Jan 2019",
      stats: {
        Attempts: "2345 Users",
        Score: "-",
        Rank: "-",
      },
    },
  ];

  return (
    <DashboardColumnContainer>
      {[
        <DashboardTestCardColumnHeader
          key="paid-exams"
          icon="exam"
          title="Paid Exams"
        >
          {paidExams.map(c => (
            <DashboardTestCard key={c.title} {...c} variant="flat" />
          ))}
        </DashboardTestCardColumnHeader>,
        <DashboardTestCardColumnHeader
          key="exam-details"
          imageLogoUrl={paidExams[0].imageLogoUrl}
          title={paidExams[0].title}
        >
          {examDetails.map(c => (
            <DashboardTestCard key={c.title} {...c} variant="flat" />
          ))}
        </DashboardTestCardColumnHeader>,
      ]}
    </DashboardColumnContainer>
  );
};
