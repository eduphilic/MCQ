import React, { SFC } from "react";

import Add from "@material-ui/icons/Add";
import Pageview from "@material-ui/icons/Pageview";

import { DashboardCard } from "components/organisms/DashboardCard";
import { AdminDashboardTemplateContainer } from "../../containers/AdminDashboardTemplateContainer";

export const AdminTestManager: SFC<{}> = () => {
  const noop = () => {}; // tslint:disable-line

  return (
    <AdminDashboardTemplateContainer titleText="Test Manager">
      {["AirForce", "Army", "Navy"].map(title => (
        <DashboardCard
          key={title}
          title={`${title} Entry`}
          columnLabels={["Category", "", ""]}
          columnTypes={["dual-line", "switch", "button"]}
          onItemEditClick={noop}
          items={[
            {
              key: "0",
              columns: [
                { primaryText: "Soldier GD", secondaryText: "10th" },
                { switchChecked: false },
                {
                  primaryText: "Template",
                  buttonIconNode: <Add />,
                  buttonTooltipTitle: "Add New Template",
                },
              ],
            },
            {
              key: "1",
              columns: [
                { primaryText: "Soldier Tradesman", secondaryText: "10th" },
                { switchChecked: true },
                {
                  primaryText: "View",
                  buttonIconNode: <Pageview />,
                  buttonTooltipTitle: "Preview Template",
                },
              ],
            },
            {
              key: "2",
              columns: [
                {
                  primaryText: "Soldier Tradesman",
                  secondaryText: "8th",
                },
                { switchChecked: true },
                {
                  primaryText: "View",
                  buttonIconNode: <Pageview />,
                  buttonTooltipTitle: "Preview Template",
                },
              ],
            },
            {
              key: "3",
              columns: [
                { primaryText: "Soldier GD", secondaryText: "12th" },
                { switchChecked: false },
                {
                  primaryText: "View",
                  buttonIconNode: <Pageview />,
                  buttonTooltipTitle: "Preview Template",
                },
              ],
            },
          ]}
        />
      ))}
    </AdminDashboardTemplateContainer>
  );
};
