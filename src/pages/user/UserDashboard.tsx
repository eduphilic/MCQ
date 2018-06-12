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
      attemptButtonLabel: "Attempt",
    },
    {
      imageLogoUrl: entryImages.Army,
      title: "Airmen Group X 20 Mock Tests Set",
      subtitle: "Validity 31st Jan 2019",
      attemptButtonLabel: "Attempt",
    },
    {
      imageLogoUrl: entryImages.AssamRifles,
      title: "Sailor Airificer Apprentice 20 Mock Tests Set",
      subtitle: "Validity 31st Jan 2019",
      attemptButtonLabel: "Attempt",
    },
  ];

  return <>{cards.map(c => <DashboardTestCard key={c.title} {...c} />)}</>;
};
