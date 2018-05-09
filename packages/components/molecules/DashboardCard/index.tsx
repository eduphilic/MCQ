import React, { Component } from "react";

import Card from "material-ui/Card";

import { DashboardCardItem } from "./DashboardCardItem";
import {
  DashboardCardModeContextProps,
  DashboardCardModeProvider,
} from "./DashboardCardModeContext";
import {
  DashboardCardTitleToolbar,
  DashboardCardTitleToolbarProps,
} from "./DashboardCardTitleToolbar";

export interface DashboardCardProps
  extends Pick<
      DashboardCardModeContextProps,
      "onItemEditClick" | "onRequestDeleteClick"
    >,
    Pick<DashboardCardTitleToolbarProps, "editCaptionText"> {
  /**
   * Card title. If not provided, no title toolbar is displayed.
   */
  title?: string;

  /**
   * Data list items.
   */
  items: DashboardCardItem[];
}

export class DashboardCard extends Component<DashboardCardProps> {
  render() {
    const {
      title,
      items,
      onItemEditClick,
      onRequestDeleteClick,
      editCaptionText,
    } = this.props;
    const itemKeys = items.map(item => item.key);

    return (
      <DashboardCardModeProvider
        itemKeys={itemKeys}
        onItemEditClick={onItemEditClick}
        onRequestDeleteClick={onRequestDeleteClick}
      >
        <Card>
          {title && (
            <DashboardCardTitleToolbar
              title={title}
              editCaptionText={editCaptionText}
              showEditButton={Boolean(onItemEditClick)}
              showDeletionButton={Boolean(onRequestDeleteClick)}
            />
          )}
        </Card>
      </DashboardCardModeProvider>
    );
  }
}
