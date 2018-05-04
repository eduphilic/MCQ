import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import Card from "material-ui/Card";
// import Paper from "material-ui/Paper";
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "material-ui/Table";
import React, { ReactNode } from "react";
import { DashboardTableRow } from ".";

storiesOf("Atoms", module).add(
  "DashboardTableRow",
  withInfo()(() => {
    const cells: ReactNode[] = [];
    for (let i = 0; i < 10; i += 1) {
      cells.push(
        <DashboardTableRow key={i}>
          <TableCell>John</TableCell>
          <TableCell numeric>500</TableCell>
        </DashboardTableRow>,
      );
    }

    return (
      <div style={{ margin: 24 }}>
        <Card>
          {/* <CardContent> */}
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Amount</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>{cells}</TableBody>
          </Table>
          {/* </CardContent> */}
        </Card>
      </div>
    );
  }),
);
