import React, { Component } from "react";
import styled, { withProps } from "styled";

import Icon from "material-ui/Icon";
import IconButton from "material-ui/IconButton";
import { lighten } from "material-ui/styles/colorManipulator";
import Toolbar from "material-ui/Toolbar";
import Tooltip from "material-ui/Tooltip";

import { Typography } from "../../atoms/Typography";
import {
  DashboardCardModeApi,
  DashboardCardModeConsumer,
} from "./DashboardCardModeContext";

export interface DashboardCardTitleToolbarProps {
  /**
   * Card title.
   */
  title: string;

  /**
   * Instructions caption text shown in edit mode.
   */
  editCaptionText?: string;

  /**
   * Wether to display edit mode button or not.
   *
   * @default false
   */
  showEditButton?: boolean;

  /**
   * Wether to display deletion mode button or not.
   *
   * @default false
   */
  showDeletionButton?: boolean;
}

export class DashboardCardTitleToolbar extends Component<
  DashboardCardTitleToolbarProps
> {
  generateActionsButtonNode = (api: DashboardCardModeApi) => {
    const { showDeletionButton, showEditButton } = this.props;
    const {
      enterDeletionMode,
      enterEditMode,
      exitMode,
      requestDelete,
    } = api.actions;
    const { mode } = api.state;
    const selectedCount = api.actions.getSelectedCount();

    return mode === "display" ? (
      <>
        {showDeletionButton && (
          <Tooltip title="Deletion Mode">
            <IconButton onClick={enterDeletionMode}>
              <Icon>delete</Icon>
            </IconButton>
          </Tooltip>
        )}
        {showEditButton && (
          <Tooltip title="Edit Mode">
            <IconButton onClick={enterEditMode}>
              <Icon>edit</Icon>
            </IconButton>
          </Tooltip>
        )}
      </>
    ) : (
      <>
        {mode === "deletion" && (
          <Tooltip
            title={`Delete ${selectedCount} Selected Item${
              selectedCount !== 1 ? "s" : ""
            }`}
          >
            <IconButton disabled={selectedCount === 0} onClick={requestDelete}>
              <Icon>delete</Icon>
            </IconButton>
          </Tooltip>
        )}
        <Tooltip title={`Exit ${mode === "edit" ? "Edit" : "Deletion"} Mode`}>
          <IconButton onClick={exitMode}>
            <Icon>done</Icon>
          </IconButton>
        </Tooltip>
      </>
    );
  };

  generateCaptionNode = (api: DashboardCardModeApi) => {
    const { title, editCaptionText } = this.props;
    const { mode } = api.state;
    const selectedCount = api.actions.getSelectedCount();

    return (
      <>
        {/* Display mode caption. */}
        {mode === "display" && (
          <EntryTitleWrapper>
            <Icon>dashboard</Icon>
            <Typography variant="cardTitle">{title}</Typography>
          </EntryTitleWrapper>
        )}

        {/* Edit/Deletion mode captions. */}
        {mode !== "display" && (
          <Typography
            variant="tableHeadCell"
            muiTypographyProps={{ color: "inherit" }}
          >
            {mode === "edit"
              ? `Edit Mode${editCaptionText ? " - " : ""}${editCaptionText ||
                  ""}`
              : `${selectedCount} Selected for Deletion`}
          </Typography>
        )}
      </>
    );
  };

  render() {
    return (
      <DashboardCardModeConsumer>
        {api => (
          <ColoredToolbar mode={api.state.mode}>
            <CaptionWrapper>{this.generateCaptionNode(api)}</CaptionWrapper>
            {this.generateActionsButtonNode(api)}
          </ColoredToolbar>
        )}
      </DashboardCardModeConsumer>
    );
  }
}

type ModeProp = Pick<DashboardCardModeApi["state"], "mode">;

const ColoredToolbar = withProps<ModeProp>()(styled(Toolbar))`
  ${({ mode, theme }) => {
    if (mode === "display") return;

    return `
      color: ${
        mode === "edit" ? theme.palette.primary.dark : theme.palette.error.dark
      };
      background-color: ${lighten(
        mode === "edit"
          ? theme.palette.primary.light
          : theme.palette.error.light,
        0.75,
      )}
    `;
  }}
`;

const CaptionWrapper = styled.div`
  flex: 1;
`;

const EntryTitleWrapper = styled.div`
  display: flex;

  > *:first-child {
    margin-right: ${({ theme }) => theme.spacing.unit}px;
    color: #757575;
  }
`;