import strings from "l10n";
import React, { Component } from "react";
import { connect } from "react-redux";
import { actions, models, RootState } from "store";

import Card, { CardHeader } from "material-ui/Card";
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "material-ui/Table";

import { DashboardTableCell } from "components/atoms/DashboardTableCell";
import { DashboardTableRow } from "components/atoms/DashboardTableRow";
import { Typography } from "components/atoms/Typography";
import { TypographyL10 } from "components/atoms/TypographyL10";
import { DashboardCardStatsContent } from "components/molecules/DashboardCardStatsContent";
import { FilterButton } from "components/molecules/FilterButton";

import { AdminDashboardTemplateContainer } from "../../containers/AdminDashboardTemplateContainer";
import { ReactComponent as ManSvg } from "./man.svg";

import { createPlaceholderFilterButtonProps } from "components/molecules/FilterButton/createPlaceholderFilterButtonProps";
import { randomNumber } from "placeholder";

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
          {serviceStatistics && (
            <Table>
              <TableHead>
                <TableRow>
                  {["Entry", "Signup Count"].map(label => (
                    <DashboardTableCell key={label} firstCellWidth="50%">
                      <Typography variant="tableHeadCell">{label}</Typography>
                    </DashboardTableCell>
                  ))}
                </TableRow>
              </TableHead>

              <TableBody>
                {serviceStatistics.entries.map((e, index) => (
                  <DashboardTableRow key={e}>
                    <TableCell>
                      <Typography>{e}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>
                        {serviceStatistics.entriesRegistrationsToday[index]}
                      </Typography>
                    </TableCell>
                  </DashboardTableRow>
                ))}
              </TableBody>
            </Table>
          )}
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
          {serviceStatistics && (
            <Table>
              <TableHead>
                <TableRow>
                  {["Subjects", "Questions Count"].map(label => (
                    <DashboardTableCell key={label} firstCellWidth="50%">
                      <Typography variant="tableHeadCell">{label}</Typography>
                    </DashboardTableCell>
                  ))}
                </TableRow>
              </TableHead>

              <TableBody>
                {serviceStatistics.questionSubjects.map((subject, index) => (
                  <DashboardTableRow key={subject}>
                    <TableCell>{subject}</TableCell>
                    <TableCell>
                      {serviceStatistics.questionCountsPerSubjects[index]}
                    </TableCell>
                  </DashboardTableRow>
                ))}
              </TableBody>
            </Table>
          )}
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
