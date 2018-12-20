import React, { ReactElement, ReactNode } from "react";
import {
  arrayMove,
  SortableContainer,
  SortableElement,
  SortableHandle,
} from "react-sortable-hoc";
import { Grid } from "../Grid";

export type DraggableListProps = {
  itemElements: ReactElement<any>[];
};

type DraggableListItemProps = {
  children: ReactElement<any>;
};

export const DraggableList = SortableContainer<DraggableListProps>(props => {
  const { itemElements } = props;

  const draggableItemElements = itemElements.map((itemElement, index) => {
    const key = itemElement.key || index;
    return (
      <DraggableListItem key={key} index={index}>
        {itemElement}
      </DraggableListItem>
    );
  });

  return <div>{draggableItemElements}</div>;
});

const DraggableListItem = SortableElement<DraggableListItemProps>(props => {
  const { children } = props;

  return (
    <Grid container spacing={16}>
      <Grid item>list_controls</Grid>
      <Grid item xs>
        {children}
      </Grid>
    </Grid>
  );
});
