import React, { SFC } from "react";
import styled from "styled";
import { AdminDashboardTemplateContainer } from "../../containers/AdminDashboardTemplateContainer";

import AppBar from "material-ui/AppBar";
import Card, { CardHeader } from "material-ui/Card";
import Chip from "material-ui/Chip";
import { FormControlLabel } from "material-ui/Form";
import Icon from "material-ui/Icon";
import IconButton from "material-ui/IconButton";
import Switch from "material-ui/Switch";
import Table, { TableBody, TableCell } from "material-ui/Table";
import Toolbar from "material-ui/Toolbar";

import { Button } from "components/atoms/Button";
import { DashboardTableRow } from "components/atoms/DashboardTableRow";
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
        const rows = entryRecord.slice(1);

        return (
          <Card key={entryTitle}>
            {/* Entry Card Header */}
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
                <IconButton style={{ marginTop: 4, marginBottom: -4 }}>
                  <Icon>mode_edit</Icon>
                </IconButton>
              }
            />

            {/* Entry Listings */}
            <div style={{ overflowX: "auto" }}>
              <Table style={{ minWidth: 1000 }}>
                <TableBody>
                  {rows.map(([category, subcategory, ppp, activated]) => (
                    <DashboardTableRow key={category as string}>
                      {/* Category label */}
                      <TableCell>
                        <Typography>{category}</Typography>
                      </TableCell>

                      {/* Chip: category / sub-category */}
                      <TableCell>
                        {subcategory ? <ChipSubcategory /> : <ChipCategory />}
                      </TableCell>

                      {/* Price per paper */}
                      <TableCell>
                        <Typography>Rs {ppp} pp</Typography>
                      </TableCell>

                      {/* Activation Switch */}
                      <TableCell>
                        <FormControlLabel
                          control={
                            <Switch
                              color="primary"
                              checked={activated as boolean}
                              onClick={() => alert("Placeholder")}
                            />
                          }
                          label={
                            <Typography>
                              {activated ? "Activated" : "De-activated"}
                            </Typography>
                          }
                        />
                      </TableCell>

                      {/* Delete button */}
                      <TableCell numeric>
                        <IconButton>
                          <Icon>delete</Icon>
                        </IconButton>
                      </TableCell>
                    </DashboardTableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </Card>
        );
      })}
    </AdminDashboardTemplateContainer>
  );
};

const ChipCategory = styled(Chip).attrs({
  label: "category",
})`
  color: #fff;
  background-color: #3fc439;
`;

const ChipSubcategory = styled(Chip).attrs({
  label: "sub-category",
})`
  color: #fff;
  background-color: #f299fa;
`;
