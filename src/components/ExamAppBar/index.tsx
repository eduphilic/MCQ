import React, { SFC } from "react";
import styled from "styled";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import { DropdownButton } from "components/DropdownButton";
import { Typography } from "components/Typography";
import { TypographyButton } from "components/TypographyButton";

export interface ExamAppBarProps {
  /**
   * Show the start exam button.
   */
  showStartExamButton?: boolean;

  /**
   * Show the submit button.
   */
  showSubmitButton?: boolean;
}

export const ExamAppBar: SFC<ExamAppBarProps> = props => {
  const { showStartExamButton, showSubmitButton } = props;

  return (
    <AppBar color="inherit" position="static">
      <ToolbarWithButtonMargins>
        <TypographyButton>{"<"} Dashboard</TypographyButton>

        <DropdownButton>
          <Typography variant="buttonBold">English</Typography>
        </DropdownButton>

        <FlexSpacer />

        {showStartExamButton && (
          <TypographyButton color="primary">Start Exam</TypographyButton>
        )}

        {showSubmitButton && <TypographyButton>Submit</TypographyButton>}
      </ToolbarWithButtonMargins>
    </AppBar>
  );
};

const ToolbarWithButtonMargins = styled(Toolbar)`
  > *:not(:last-child) {
    margin-right: 16px;
  }
`;

const FlexSpacer = styled.div`
  flex: 1;
`;
