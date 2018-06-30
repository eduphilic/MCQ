import { serviceStatistics } from "common/structures/serviceStatistics";
import { strings } from "localization";
import React, { Component } from "react";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import { DashboardCardStatsContent } from "components/DashboardCardStatsContent";
import { DashboardTableCell } from "components/DashboardTableCell";
import { DashboardTableRow } from "components/DashboardTableRow";
import { FilterButton } from "components/FilterButton";
import { Typography } from "components/Typography";
import { TypographyL10 } from "components/TypographyL10";

import { AdminDashboardTemplateContainer } from "../../containers/AdminDashboardTemplateContainer";
import { ReactComponent as ManSvg } from "./man.svg";

import { randomNumber } from "common/utils";
import { createPlaceholderFilterButtonProps } from "components/FilterButton/createPlaceholderFilterButtonProps";

// tslint:disable-next-line:no-empty-interface
interface AdminDashboardProps {}

export class AdminDashboard extends Component<AdminDashboardProps> {
  render() {
    const filterButtonProps = createPlaceholderFilterButtonProps();

    return (
      <AdminDashboardTemplateContainer>
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
                    <TableCell>
                      <Typography>{subject}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>
                        {serviceStatistics.questionCountsPerSubjects[index]}
                      </Typography>
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
