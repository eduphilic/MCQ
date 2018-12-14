import { css } from "@join-uniform/theme";
import { storiesOf } from "@storybook/react";
import React from "react";
import { Grid } from "../Grid";
import { Typography } from "../muiComponents";
import { Button, ButtonProps, colors } from "./Button";

const stories = storiesOf("Button", module);

const variants: NonNullable<ButtonProps["variant"]>[] = [
  "contained",
  "text",
  "outlined",
];

stories.add("default", () => (
  <div
    css={css`
      margin: 20px;
    `}
  >
    <Grid container direction="column" spacing={40}>
      {variants.map(variant => (
        <Grid key={variant} item xs>
          <Typography variant="h4" paragraph>
            {variant}
          </Typography>

          <Grid container spacing={16} justify="center">
            {colors.map(color => (
              <Grid key={color} item>
                <Button variant={variant} color={color}>
                  {color}
                </Button>
              </Grid>
            ))}
            <Grid item>
              <Button variant={variant} disabled>
                disabled
              </Button>
            </Grid>
          </Grid>
        </Grid>
      ))}
    </Grid>
  </div>
));
