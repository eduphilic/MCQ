import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Hidden from "@material-ui/core/Hidden";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { Divider } from "components/Divider";
import { Typography, TypographyProps } from "components/Typography";
import React, { SFC } from "react";
import styled from "styled";
import { ExamDrawerPerformanceAnalysis } from "../ExamDrawerPerformanceAnalysis";

export const ExamAnalysisPanelMobile: SFC = props => {
  const {} = props;

  return (
    <Hidden mdUp>
      <StyledExpansionPanel>
        <StyledExpansionPanelSummary>
          <StyledTypography>Success -80%</StyledTypography>
          <VerticalDivider />
          <StyledTypography>Wrong -14%</StyledTypography>
          <VerticalDivider />
          <StyledTypography>Left -6%</StyledTypography>
          <VerticalDivider />
          <StyledTypography color="textSecondary">Easy</StyledTypography>
          <div style={{ flex: 1 }} />
        </StyledExpansionPanelSummary>
        <StyledExpansionPanelDetails>
          <ExamDrawerPerformanceAnalysis examResult="pass" />
        </StyledExpansionPanelDetails>
      </StyledExpansionPanel>
    </Hidden>
  );
};

const VerticalDivider = styled<{ className?: string }>(props => (
  <Divider
    className={props.className}
    variant="vertical"
    verticalVariantHeight="16px"
  />
))`
  width: 2px;
  margin-right: 4px;
`;

const StyledExpansionPanel = styled<{ className?: string }>(props => (
  <ExpansionPanel className={props.className} elevation={0}>
    {props.children}
  </ExpansionPanel>
))`
  /* Remove the default top margin from the layout. */
  margin-top: 0 !important;

  /* Remove the bottom margin from the top of the exam header. */
  margin-bottom: -16px;
`;

const StyledExpansionPanelSummary = styled<{ className?: string }>(props => (
  <ExpansionPanelSummary
    expandIcon={<ExpandMore />}
    classes={{ content: "content", expandIcon: "expand-icon" }}
    {...props}
  />
))`
  padding: 0 8px;
  min-height: inherit !important;

  .content {
    margin: 12px 0 !important;
  }

  .expand-icon {
    right: 0;
  }
`;
// @ts-ignore
StyledExpansionPanelSummary.muiName = "ExpansionPanelSummary";

const StyledExpansionPanelDetails = styled<{ className?: string }>(props => (
  <ExpansionPanelDetails {...props} />
))`
  padding: 0 8px;
  background-color: #deebf7;
`;
// @ts-ignore
StyledExpansionPanelDetails.muiName = "ExpansionPanelDetails";

const StyledTypography = styled<{
  className?: string;
  color?: NonNullable<TypographyProps["color"]>;
}>(props => (
  <Typography
    className={props.className}
    variant="Subtitle2"
    color={props.color || "primary"}
  >
    {props.children}
  </Typography>
))`
  font-size: 13px;

  &:not(:last-child) {
    margin-right: 4px;
  }
`;
