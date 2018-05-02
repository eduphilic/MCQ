import { AdminPanelUsersSummary } from "components/organisms/AdminPanelUsersSummary";
import { createPlaceholderAdminPanelUsersSummaryProps } from "components/organisms/AdminPanelUsersSummary/createPlaceholderAdminPanelUsersSummaryProps";
import React, { Component } from "react";
import { connect } from "react-redux";
import { actions } from "store";
import { AdminDashboardTemplateContainer } from "../../containers/AdminDashboardTemplateContainer";

import { FilterButton } from "components/molecules/FilterButton";
import { createPlaceholderFilterButtonProps } from "components/molecules/FilterButton/createPlaceholderFilterButtonProps";
import Card, { CardHeader } from "material-ui/Card";
import Table, { TableBody, TableCell, TableRow } from "material-ui/Table";
// TODO: Fix this:
/* tslint:disable-next-line */
import { models, RootState } from "store";

import ExpandMore from "@material-ui/icons/ExpandMore";
import ExpansionPanel, {
  ExpansionPanelDetails,
  ExpansionPanelSummary,
} from "material-ui/ExpansionPanel";
import Typography from "material-ui/Typography";

interface AdminDashboardProps {
  serviceStatistics: models.ServiceStatistics | null;
  fetchServiceStatistics: () => void;
}

class AdminDashboard extends Component<AdminDashboardProps> {
  constructor(props: AdminDashboardProps) {
    super(props);

    this.props.fetchServiceStatistics();
  }

  render() {
    const usersSummaryProps = createPlaceholderAdminPanelUsersSummaryProps();
    const filterButtonProps = createPlaceholderFilterButtonProps();
    const { serviceStatistics } = this.props;

    return (
      <AdminDashboardTemplateContainer>
        <AdminPanelUsersSummary {...usersSummaryProps} />

        {/* Entry wise Users */}
        <Card style={{ marginTop: 24 }}>
          <CardHeader
            title="Entry wise Users"
            action={<FilterButton {...filterButtonProps} />}
          />
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMore />}>
              <Typography variant="subheading">
                Weekly user registrations per entry
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              {serviceStatistics ? (
                <Table>
                  <TableBody>
                    {serviceStatistics.entries.map((e, index) => (
                      <TableRow key={e}>
                        <TableCell>{e}</TableCell>
                        <TableCell numeric>
                          {serviceStatistics.entriesRegistrationsToday[index]}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              ) : (
                <div />
              )}
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </Card>

        {/* Membership Status */}
        <Card style={{ marginTop: 24 }}>
          <CardHeader
            title="Membership Status"
            action={<FilterButton {...filterButtonProps} />}
          />
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMore />}>
              <Typography variant="subheading">
                Weekly registrations per membership
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              {serviceStatistics ? (
                <Table>
                  <TableBody>
                    {[
                      ["membershipTrialUsersToday", "Trial Users"],
                      ["membershipBronzeUsersToday", "Bronze Pack Users"],
                      ["membershipSilverUsersToday", "Silver Pack Users"],
                      ["membershipGoldUsersToday", "Gold Pack Users"],
                    ].map(([stat, label]) => (
                      <TableRow key={stat}>
                        <TableCell>{label}</TableCell>
                        <TableCell numeric>
                          {(serviceStatistics as any)[stat]}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              ) : (
                <div />
              )}
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </Card>

        {/* Question Bank */}
        <Card style={{ marginTop: 24 }}>
          <CardHeader title="Question Bank" />
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMore />}>
              <Typography variant="subheading">
                Questions per Subject
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              {serviceStatistics ? (
                <Table>
                  <TableBody>
                    {serviceStatistics.questionSubjects.map(
                      (subject, index) => (
                        <TableRow key={subject}>
                          <TableCell>{subject}</TableCell>
                          <TableCell numeric>
                            {serviceStatistics.questionCountsPerSubjects[index]}
                          </TableCell>
                        </TableRow>
                      ),
                    )}
                  </TableBody>
                </Table>
              ) : (
                <div />
              )}
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </Card>
      </AdminDashboardTemplateContainer>
    );
  }
}

const mapStateToProps = (
  rootState: RootState,
): Partial<AdminDashboardProps> => ({
  serviceStatistics: rootState.admin.serviceStatistics,
});

const ConnectedAdminDashboard = connect<AdminDashboardProps>(
  mapStateToProps as any,
  {
    fetchServiceStatistics: actions.admin.fetchServiceStatistics,
  },
)(AdminDashboard);

export { ConnectedAdminDashboard as AdminDashboard };
