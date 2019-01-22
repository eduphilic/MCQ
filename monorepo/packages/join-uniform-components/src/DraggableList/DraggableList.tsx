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
  onRemoveButtonClick: (index: number) => void;
};

type DraggableListItemProps = {
  children: ReactElement<any>;
  itemIndex: number;
  onRemoveButtonClick: (index: number) => void;
};

const DraggableListBase = SortableContainer<DraggableListProps>(props => {
  const { itemElements, onRemoveButtonClick } = props;

  const draggableItemElements = itemElements.map((itemElement, index) => {
    const key = itemElement.key || index;
    return (
      <DraggableListItem
        key={key}
        index={index}
        itemIndex={index}
        onRemoveButtonClick={onRemoveButtonClick}
      >
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
  const { children, itemIndex, onRemoveButtonClick } = props;

  return (
    <Grid container spacing={16}>
      <Grid item>
        <Grid container direction="column">
          <Grid item>
            <DragHandle />
          </Grid>
          <Grid item>
            <IconButton>
              <RemoveIcon onClick={() => onRemoveButtonClick(itemIndex)} />
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
