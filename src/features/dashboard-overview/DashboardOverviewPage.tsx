import React, { SFC } from "react";
import { OverviewCard } from "./components/OverviewCard";

export const DashboardOverviewPage: SFC = () => (
  <OverviewCard
    title="Rank"
    stats={{
      "Soldier GD (Army)": "123/999 (92% from 5 papers)",
      "Artificer Apprentice (Airforce)": "123/999 (92% from 8 papers)",
    }}
  />
);
