import React, { Component } from "react";

import Card from "material-ui/Card";
import Checkbox from "material-ui/Checkbox";
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "material-ui/Table";

import { DashboardTableRow } from "../../atoms/DashboardTableRow";
import { Typography } from "../../atoms/Typography";
import {
  DashboardEntryCardToolbar,
  DashboardEntryCardToolbarProps,
} from "./DashboardEntryCardToolbar";

export interface DashboardEntryCardProps
  extends Pick<DashboardEntryCardToolbarProps, "entryTitle"> {
  categoryLabels: string[];
  categoryPrices: number[];
  categoryActivated: boolean[];
}

interface DashboardEntryCardState
  extends Pick<DashboardEntryCardToolbarProps, "mode"> {
  categorySelected: boolean[];
}

export class DashboardEntryCard extends Component<
  DashboardEntryCardProps,
  DashboardEntryCardState
> {
  constructor(props: DashboardEntryCardProps) {
    super(props);

    this.state = {
      mode: "display",
      categorySelected: props.categoryLabels.map(() => false),
    };
  }

  handleEnterEditModeClick = () => this.setState({ mode: "edit" });
  handleEnterDeletionModeClick = () => this.setState({ mode: "deletion" });
  handleExitModeClick = () =>
    this.setState({
      mode: "display",
      categorySelected: this.props.categoryLabels.map(() => false),
    });

  render() {
    const {
      entryTitle,
      categoryLabels,
      categoryPrices,
      // categoryActivated,
    } = this.props;
    const { mode, categorySelected } = this.state;
    const itemCount = categoryLabels.length;
    const selectedCount = categorySelected.reduce((a, c) => (c ? a + 1 : a), 0);

    // tslint:disable-next-line:no-empty
    const noop = () => {};

    return (
      <Card>
        <DashboardEntryCardToolbar
          mode={mode}
          entryTitle={entryTitle}
          selectedCount={selectedCount}
          onEnterEditModeClick={this.handleEnterEditModeClick}
          onEnterDeletionModeClick={this.handleEnterDeletionModeClick}
          onExitModeClick={this.handleExitModeClick}
          onDeleteSelectedClick={noop}
        />

        <Table>
          {/* Table Header */}
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox" style={{ width: 72 }}>
                {mode === "deletion" && (
                  <Checkbox
                    indeterminate={
                      selectedCount > 0 && selectedCount < itemCount
                    }
                    checked={selectedCount === itemCount}
                    onChange={noop}
                  />
                )}
              </TableCell>

              {["Category", "Cost Per Paper"].map(caption => (
                <TableCell key={caption}>
                  <Typography variant="tableHeadCell">{caption}</Typography>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          {/* Table Contents */}
          <TableBody>
            {categoryLabels.map((label, index) => (
              <DashboardTableRow key={label}>
                <TableCell padding="checkbox" />
                <TableCell>
                  <Typography>{label}</Typography>
                </TableCell>
                <TableCell>
                  <Typography>{categoryPrices[index]}</Typography>
                </TableCell>
              </DashboardTableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    );
  }
}
