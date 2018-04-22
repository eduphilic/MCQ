import strings from "l10n";
import Card, { CardContent, CardHeader } from "material-ui/Card";
import Typography from "material-ui/Typography";
import React, { SFC } from "react";
import styled, { css } from "styled";
import { FilterButton, FilterButtonProps } from "../../molecules/FilterButton";
import { ReactComponent as ManSvg } from "./man.svg";

export interface AdminPanelUsersSummaryProps {
  /**
   * Props to pass to FilterButton.
   */
  filterButtonProps: FilterButtonProps;

  totalUsers: number;

  activeUsers: number;

  registrationsToday: number;
}

/**
 * Provides a summary of signed up users for use on the Admin Dashboard.
 */
export const AdminPanelUsersSummary: SFC<
  AdminPanelUsersSummaryProps
> = props => {
  const {
    filterButtonProps,
    totalUsers,
    activeUsers,
    registrationsToday,
  } = props;

  const stats: [keyof typeof strings, number][] = [
    ["adminPanelUsersSummaryTotalUsers", totalUsers],
    ["adminPanelUsersSummaryActiveUsers", activeUsers],
    ["adminPanelUsersSummaryRegistrationsToday", registrationsToday],
  ];

  return (
    <Wrapper>
      <Card>
        <CardHeader
          title="Users"
          action={<FilterButton {...filterButtonProps} />}
          classes={{ action: "cardHeaderAction" }}
        />
        <CardContent>
          <StatsWrapper>
            <div className="manWrapper">
              <ManSvg />
            </div>

            {stats.map(([title, value]) => (
              <StatWrapper key={title}>
                <div>
                  <Typography variant="display1">{value}</Typography>
                </div>
                <div>
                  <Typography variant="caption">{strings[title]}</Typography>
                </div>
              </StatWrapper>
            ))}
          </StatsWrapper>
        </CardContent>
      </Card>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .cardHeaderAction {
    margin-top: 0;
  }
`;

const flexWrap = css`
  ${({ theme }) => theme.breakpoints.down("xs")} {
    display: flex;
    flex-wrap: wrap;

    > div {
      width: 100%;
    }
  }
`;

const StatsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  ${flexWrap};

  .manWrapper,
  .manWrapper svg {
    width: 64px;
    height: 64px;
  }

  ${({ theme }) => theme.breakpoints.down("xs")} {
    .manWrapper {
      display: none;
    }
  }
`;

const StatWrapper = styled.div`
  margin: 0 8px;
  ${flexWrap};

  ${({ theme }) => theme.breakpoints.down("xs")} {
    &:not(first-child) {
      margin-top: ${({ theme }) => theme.spacing.unit}px;
    }
  }
`;
