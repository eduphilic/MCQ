import React, { Component, ReactNode } from "react";

import Card from "@material-ui/core/Card";

import { CardActions } from "../muiComponents";
import { DashboardCardItem } from "./DashboardCardItem";
import {
  DashboardCardModeContextProps,
  DashboardCardModeProvider,
} from "./DashboardCardModeContext";
import {
  DashboardCardPagination,
  DashboardCardPaginationProps,
} from "./DashboardCardPagination";
import { DashboardCardPaginationHeaderToolbar } from "./DashboardCardPaginationHeaderToolbar";
import {
  DashboardCardTable,
  DashboardCardTableProps,
} from "./DashboardCardTable";
import {
  DashboardCardTitleToolbar,
  DashboardCardTitleToolbarProps,
} from "./DashboardCardTitleToolbar";

export interface DashboardCardProps
  extends Pick<
      DashboardCardModeContextProps,
      "onItemEditClick" | "onRequestDeleteClick"
    >,
    Pick<
      DashboardCardTitleToolbarProps,
      "editCaptionText" | "additionalActionNode" | "iconNode"
    >,
    Pick<DashboardCardTableProps, "columnLabels" | "columnTypes"> {
  /**
   * Card title. If not provided, no title toolbar is displayed.
   */
  title?: string;

  /**
   * A node to render to the right of the card title.
   */
  titleSiblingNode?: ReactNode;

  /**
   * Data list items.
   */
  items: DashboardCardItem[];

  /**
   * Optional pagination options. When left undefined, no pagination control is
   * shown.
   */
  paginationProps?: DashboardCardPaginationProps;

  /**
   * Required if "paginationProps" is provided. The word describing the type of
   * items in the table, eg. "question". It will be pluralized automatically.
   */
  paginationListItemType?: string;

  bottomActionsNode?: ReactNode;
}

export class DashboardCard extends Component<DashboardCardProps> {
  render() {
    const {
      title,
      titleSiblingNode,
      iconNode,
      items,
      onItemEditClick,
      onRequestDeleteClick,
      editCaptionText,
      columnLabels,
      columnTypes,
      paginationProps,
      paginationListItemType,
      additionalActionNode,
      bottomActionsNode,
    } = this.props;
    const itemKeys = items.map(item => item.key);

    const paginationNode = paginationProps ? (
      <DashboardCardPagination {...paginationProps} />
    ) : (
      undefined
    );

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
              titleSiblingNode={titleSiblingNode}
              iconNode={iconNode}
              editCaptionText={editCaptionText}
              showEditButton={items.length > 0 && Boolean(onItemEditClick)}
              showDeletionButton={
                items.length > 0 && Boolean(onRequestDeleteClick)
              }
              additionalActionNode={additionalActionNode}
            />
          )}

          {paginationProps && (
            <DashboardCardPaginationHeaderToolbar
              {...paginationProps}
              listItemType={paginationListItemType!}
            />
          )}

          {items.length > 0 && (
            <DashboardCardTable
              showCheckboxes={Boolean(onRequestDeleteClick)}
              columnLabels={columnLabels}
              columnTypes={columnTypes}
              items={items}
              bottomPaginationNode={paginationNode}
            />
          )}

          {bottomActionsNode && <CardActions>{bottomActionsNode}</CardActions>}
        </Card>
      </DashboardCardModeProvider>
    );
  }
}
