import { styled } from "@join-uniform/theme";
import { lighten } from "@material-ui/core/styles/colorManipulator";
import React, { Component, ReactElement, ReactNode } from "react";

import {
  DashboardIcon,
  DeleteIcon,
  DoneIcon,
  EditIcon,
} from "@join-uniform/icons";
import { cardTitleStyle } from "../adminTypography";
import {
  IconButton,
  Toolbar,
  ToolbarProps,
  Tooltip,
  Typography,
} from "../muiComponents";

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
   * Optional icon node. Replaces the default Material Design "dashboard" icon.
   */
  iconNode?: ReactNode;

  /**
   * A node to render to the right of the card title.
   */
  titleSiblingNode?: ReactNode;

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
   * Whether to display deletion mode button or not.
   *
   * @default false
   */
  showDeletionButton?: boolean;

  /**
   * Additional action node. Shown to the left of the edit and delete action
   * buttons if provided.
   */
  additionalActionNode?: ReactNode;
}

export class DashboardCardTitleToolbar extends Component<
  DashboardCardTitleToolbarProps
> {
  generateActionsButtonNode = (api: DashboardCardModeApi) => {
    const {
      showDeletionButton,
      showEditButton,
      additionalActionNode,
    } = this.props;
    const {
      enterDeletionMode,
      enterEditMode,
      exitMode,
      requestDelete,
    } = api.actions;
    const { mode } = api.state;
    const selectedCount = api.actions.getSelectedCount();

    /**
     * This is used to selectively wrap an element with a tooltip. Passing a
     * disabled button as a child to a tooltip causes an error. To prevent the
     * error, undefined is passed as the title when the element should be
     * disabled to prevent wrapping with a tooltip.
     */
    const maybeWithTooltip = (element: ReactElement<any>, title?: string) =>
      title ? <Tooltip title={title}>{element}</Tooltip> : element;

    return mode === "display" ? (
      <>
        {additionalActionNode}
        {showDeletionButton && (
          <Tooltip title="Deletion Mode">
            <IconButton onClick={enterDeletionMode}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        )}
        {showEditButton && (
          <Tooltip title="Edit Mode">
            <IconButton onClick={enterEditMode}>
              <EditIcon />
            </IconButton>
          </Tooltip>
        )}
      </>
    ) : (
      <>
        {mode === "deletion" &&
          maybeWithTooltip(
            <IconButton disabled={selectedCount === 0} onClick={requestDelete}>
              <DeleteIcon />
            </IconButton>,
            selectedCount !== 0
              ? `Delete ${selectedCount} Selected Item${
                  selectedCount !== 1 ? "s" : ""
                }`
              : undefined,
          )}
        <Tooltip title={`Exit ${mode === "edit" ? "Edit" : "Deletion"} Mode`}>
          <IconButton onClick={exitMode}>
            <DoneIcon />
          </IconButton>
        </Tooltip>
      </>
    );
  };

  generateCaptionNode = (api: DashboardCardModeApi) => {
    const { title, titleSiblingNode, editCaptionText, iconNode } = this.props;
    const { mode } = api.state;
    const selectedCount = api.actions.getSelectedCount();

    return (
      <>
        {/* Display mode caption. */}
        {mode === "display" && (
          <EntryTitleWrapper>
            {iconNode || <DashboardIcon />}
            <Typography css={cardTitleStyle}>{title}</Typography>
            {titleSiblingNode}
          </EntryTitleWrapper>
        )}

        {/* Edit/Deletion mode captions. */}
        {mode !== "display" && (
          <Typography variant="subtitle2" color="inherit">
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

const ColoredToolbar = styled((props: ToolbarProps & ModeProp) => {
  const { mode, ...rest } = props;
  return <Toolbar {...rest} />;
})`
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
  align-items: center;

  > *:first-child {
    margin-right: ${({ theme }) => theme.spacing.unit}px;
    color: #757575;
  }

  > *:nth-child(3) {
    margin-left: ${({ theme }) => theme.spacing.unit * 2}px;
  }
`;
