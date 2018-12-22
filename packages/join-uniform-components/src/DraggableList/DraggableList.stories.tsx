import { AddIcon } from "@join-uniform/icons";
import { forceReRender, storiesOf } from "@storybook/react";
import React from "react";
import { Card } from "../Card";
import { Grid } from "../Grid";
import {
  CardContent,
  IconButton,
  TextField,
  Typography,
} from "../muiComponents";
import { arrayMove, DraggableList } from "./DraggableList";

const stories = storiesOf("DraggableList", module);

let items = Array.from({ length: 5 }, (_item, index) => `Item ${index}`);

stories.addDecorator(story => (
  <Grid container contentCenter storybookContainer>
    <Grid item xs={12}>
      <Card>
        <CardContent>
          <Typography variant="subtitle2">
            Some Setting
            <IconButton>
              <AddIcon />
            </IconButton>
          </Typography>
          {story()}
        </CardContent>
      </Card>
    </Grid>
  </Grid>
));

stories.add("default", () => (
  <DraggableList
    itemElements={items.map((item, index) => (
      <TextField key={index} label={item} fullWidth />
    ))}
    onSortEnd={({ oldIndex, newIndex }) => {
      items = arrayMove(items, oldIndex, newIndex);
      forceReRender();
    }}
    onRemoveButtonClick={() => {
      //
    }}
  />
));
