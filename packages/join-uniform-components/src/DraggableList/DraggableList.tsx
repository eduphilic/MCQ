import { DragHandleIcon, RemoveIcon } from "@join-uniform/icons";
import { styled } from "@join-uniform/theme";
import React, { ReactElement } from "react";
import {
  arrayMove,
  SortableContainer,
  SortableContainerProps,
  SortableElement,
  SortableHandle,
} from "react-sortable-hoc";
import { Grid } from "../Grid";
import { IconButton } from "../muiComponents";

export { arrayMove };

export type DraggableListProps = Omit<
  SortableContainerProps,
  "useDragHandle"
> & {
  itemElements: ReactElement<any>[];
};

type DraggableListItemProps = {
  children: ReactElement<any>;
};

const DraggableListBase = SortableContainer<DraggableListProps>(props => {
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

export function DraggableList(props: DraggableListProps) {
  return <DraggableListBase {...props} useDragHandle />;
}

const DraggableListItem = SortableElement<DraggableListItemProps>(props => {
  const { children } = props;

  return (
    <Grid container spacing={16}>
      <Grid item>
        <Grid container direction="column">
          <Grid item>
            <DragHandle />
          </Grid>
          <Grid item>
            <IconButton>
              <RemoveIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs>
        {children}
      </Grid>
    </Grid>
  );
});

const DragHandleIconButton = styled((props: { className?: string }) => (
  <IconButton className={props.className}>
    <DragHandleIcon />
  </IconButton>
))`
  cursor: grab;
`;

const DragHandle = SortableHandle(() => (
  <div>
    <DragHandleIconButton />
  </div>
));
