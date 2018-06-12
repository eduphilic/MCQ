import { entryImages } from "common/structures/entryImages";
import React, { SFC } from "react";

import {
  DashboardTestCard,
  DashboardTestCardProps,
} from "components/DashboardTestCard";

export const UserDashboard: SFC<{}> = () => {
  const cards: DashboardTestCardProps[] = [
    {
      imageLogoUrl: entryImages.AirForce,
      title: "Soldier General Duty Free Mock Test",
      subtitle: "Validity 31st Jan 2019",
      color: "yellow",
      attemptButtonLabel: "Attempt",
    },
    {
      imageLogoUrl: entryImages.AirForce,
      title: "Soldier General Duty 10 Mock Tests Set",
      subtitle: "Validity 31st Jan 2019",
      reviewButtonLabel: "Review",
      reviewButtonDisabled: true,
      attemptButtonLabel: "Attempt",
      stats: { Attempted: "Nil", Remaining: "10 Tests" },
    },
    {
      imageLogoUrl: entryImages.Army,
      title: "Airmen Group X 20 Mock Tests Set",
      subtitle: "Validity 31st Jan 2019",
      reviewButtonLabel: "Review",
      attemptButtonLabel: "Attempt",
      stats: {
        Attempted: "2 Tests (Scored 85% in 2 Tests)",
        Remaining: "18 Tests",
      },
    },
    {
      imageLogoUrl: entryImages.AssamRifles,
      title: "Sailor Airificer Apprentice 20 Mock Tests Set",
      subtitle: "Validity 31st Jan 2019",
      reviewButtonLabel: "Review",
      attemptButtonLabel: "Attempt",
      stats: {
        Attempted: "2 Tests (Scored 85% in 2 Tests)",
        Remaining: "18 Tests",
      },
    },
  ];

  return <>{cards.map(c => <DashboardTestCard key={c.title} {...c} />)}</>;
};
