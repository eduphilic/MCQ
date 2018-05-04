import React, { SFC } from "react";
import { AdminDashboardTemplateContainer } from "../../containers/AdminDashboardTemplateContainer";

import AppBar from "material-ui/AppBar";
import Card, { CardHeader } from "material-ui/Card";
import Icon from "material-ui/Icon";
import IconButton from "material-ui/IconButton";
import Toolbar from "material-ui/Toolbar";

import { Button } from "components/atoms/Button";
import { Typography } from "components/atoms/Typography";

export const AdminEntryManager: SFC<{}> = () => {
  // @ts-ignore
  const data = [
    [
      "Officer", // Entry
      [
        "NDA/ACC", // Category
        null, // Subcategory
        10, // Price per paper
        false, // Activated (true/false)
      ],
    ],
    //
  ];

  return (
    <AdminDashboardTemplateContainer titleText="Entry Manager">
      {/* Toolbar */}
      <AppBar position="static" color="inherit">
        <Toolbar>
          <div style={{ flex: 1 }} />
          <Button color="primary" variant="flat">
            <Icon color="action">add</Icon>&nbsp;
            <Typography variant="buttonBold">Entry</Typography>
          </Button>

          <Button variant="flat" style={{ color: "#2d9cdb" }}>
            <Typography variant="buttonBold">View Deleted Entries</Typography>
          </Button>
        </Toolbar>
      </AppBar>

      {/* Entry Cards */}
      {data.map(entryRecord => {
        const entryTitle = entryRecord[0] as string;

        return (
          <Card key={entryTitle}>
            <CardHeader
              title={
                <div style={{ display: "flex" }}>
                  <Icon style={{ marginRight: 8, color: "#757575" }}>
                    dashboard
                  </Icon>
                  <Typography variant="cardTitle">
                    {entryTitle} Entry
                  </Typography>
                </div>
              }
              action={
                <IconButton style={{ paddingTop: 4 }}>
                  <Icon>mode_edit</Icon>
                </IconButton>
              }
            />
          </Card>
        );
      })}
    </AdminDashboardTemplateContainer>
  );
};
