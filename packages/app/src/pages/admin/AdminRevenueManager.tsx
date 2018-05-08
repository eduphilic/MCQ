import React, { Component, MouseEvent } from "react";
import { AdminDashboardTemplateContainer } from "../../containers/AdminDashboardTemplateContainer";

import Menu, { MenuItem } from "material-ui/Menu";

import { Button } from "components/atoms/Button";
import { Typography } from "components/atoms/Typography";
import { DashboardSecondaryToolbar } from "components/molecules/DashboardSecondaryToolbar";
import { DropdownButton } from "components/molecules/DropdownButton";

interface AdminRevenueManagerState {
  financialYearDropdownOpen: boolean;
  financialYearDropdownAnchorElement: HTMLElement | null;
}

export class AdminRevenueManager extends Component<
  {},
  AdminRevenueManagerState
> {
  state: AdminRevenueManagerState = {
    financialYearDropdownOpen: false,
    financialYearDropdownAnchorElement: null,
  };

  handleFinancialYearDropdownButtonClick = (
    event: MouseEvent<HTMLButtonElement>,
  ) => {
    this.setState({ financialYearDropdownAnchorElement: event.currentTarget });
  };

  handleFinancialYearDropdownClose = () => {
    this.setState({ financialYearDropdownAnchorElement: null });
  };

  render() {
    const { financialYearDropdownAnchorElement } = this.state;

    return (
      <AdminDashboardTemplateContainer titleText="Revenue Manager">
        {/* Financial Year Drop Down / Report Button */}
        <DashboardSecondaryToolbar>
          <DashboardSecondaryToolbar.Spacer />

          <DropdownButton
            variant="flat"
            onClick={this.handleFinancialYearDropdownButtonClick}
          >
            <Typography variant="buttonBold">
              Select Financial Year: 2017-18
            </Typography>
          </DropdownButton>
          <Menu
            id="simple-menu"
            anchorEl={financialYearDropdownAnchorElement || undefined}
            open={Boolean(financialYearDropdownAnchorElement)}
            onClose={this.handleFinancialYearDropdownClose}
          >
            {["2015-2016", "2016-2017", "2017-2018"].map(financialYear => (
              <MenuItem
                key={financialYear}
                onClick={this.handleFinancialYearDropdownClose}
              >
                {financialYear}
              </MenuItem>
            ))}
          </Menu>

          <Button variant="flat" color="primary">
            <Typography variant="buttonBold">View Detailed Report</Typography>
          </Button>
        </DashboardSecondaryToolbar>

        {/* */}
      </AdminDashboardTemplateContainer>
    );
  }
}
