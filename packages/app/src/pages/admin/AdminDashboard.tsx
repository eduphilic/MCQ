import React, { Component } from "react";
import { connect } from "react-redux";
import { actions } from "store";
import { AdminDashboardTemplateContainer } from "../../containers/AdminDashboardTemplateContainer";

import { FilterButton } from "components/molecules/FilterButton";
import { createPlaceholderFilterButtonProps } from "components/molecules/FilterButton/createPlaceholderFilterButtonProps";
import Table, { TableBody, TableCell, TableRow } from "material-ui/Table";
// TODO: Fix this:
/* tslint:disable-next-line */
import { models, RootState } from "store";

import ExpandMore from "@material-ui/icons/ExpandMore";
import ExpansionPanel, {
  ExpansionPanelDetails,
  ExpansionPanelSummary,
} from "material-ui/ExpansionPanel";
// tslint:disable-next-line:import-name
import MuiTypography from "material-ui/Typography";

import { Typography } from "components/atoms/Typography";
import { TypographyL10 } from "components/atoms/TypographyL10";
import { DashboardCardStatsContent } from "components/molecules/DashboardCardStatsContent";
import strings from "l10n";
import Card, { CardHeader } from "material-ui/Card";
import { randomNumber } from "placeholder";
import { ReactComponent as ManSvg } from "./man.svg";

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
    const filterButtonProps = createPlaceholderFilterButtonProps();
    const { serviceStatistics } = this.props;

    return (
      <AdminDashboardTemplateContainer titleText="Dashboard">
        {/* Users */}
        <Card>
          <CardHeader
            title={
              <TypographyL10
                variant="cardTitle"
                localizationKey="adminDashboardCardUsersTitle"
              />
            }
            action={<FilterButton {...filterButtonProps} />}
          />
          <DashboardCardStatsContent
            leftIcon={<ManSvg style={{ fill: "#757575" }} />}
          >
            {([
              "adminPanelUsersSummaryTotalUsers",
              "adminPanelUsersSummaryActiveUsers",
              "adminPanelUsersSummaryRegistrationsPastWeek",
            ] as (keyof typeof strings)[]).map(statCaption => (
              <DashboardCardStatsContent.Item key={statCaption}>
                <Typography variant="cardLargeStatText">
                  {randomNumber()}
                </Typography>
                <TypographyL10
                  variant="cardStatCaption"
                  localizationKey={statCaption}
                />
              </DashboardCardStatsContent.Item>
            ))}
          </DashboardCardStatsContent>
        </Card>

        {/* Membership Status */}
        <Card>
          <CardHeader
            title={
              <TypographyL10
                variant="cardTitle"
                localizationKey="adminDashboardCardMembershipStatusTitle"
              />
            }
            action={<FilterButton {...filterButtonProps} />}
          />
          <DashboardCardStatsContent>
            {["5 Exams", "10 Exams", "20 Exams", "30 Exams"].map(caption => (
              <DashboardCardStatsContent.Item key={caption}>
                <Typography variant="cardLargeStatText">
                  {randomNumber()}
                </Typography>
                <Typography variant="cardStatCaption">{caption}</Typography>
              </DashboardCardStatsContent.Item>
            ))}
          </DashboardCardStatsContent>
        </Card>

        {/* Entry wise Users */}
        <Card>
          <CardHeader
            // title="Entry wise Users"
            title={
              <TypographyL10
                variant="cardTitle"
                localizationKey="adminDashboardCardEntryWiseUsersTitle"
              />
            }
            action={<FilterButton {...filterButtonProps} />}
          />
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMore />}>
              <MuiTypography variant="subheading">
                Weekly user registrations per entry
              </MuiTypography>
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

        {/* Question Bank */}
        <Card>
          <CardHeader
            title={
              <TypographyL10
                variant="cardTitle"
                localizationKey="adminDashboardCardQuestionBankTitle"
              />
            }
          />
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMore />}>
              <MuiTypography variant="subheading">
                Questions per Subject
              </MuiTypography>
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
