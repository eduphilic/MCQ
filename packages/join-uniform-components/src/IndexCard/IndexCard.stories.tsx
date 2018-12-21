import { storiesOf } from "@storybook/react";
import React from "react";
import { Grid } from "../Grid";
import { IndexCard } from "./IndexCard";

const stories = storiesOf("IndexCard", module);

stories.addDecorator(story => (
  <Grid storybookContainer contentCenter>
    <Grid item xs={12}>
      {story()}
    </Grid>
  </Grid>
));

stories.add("default", () => (
  <IndexCard
    title="Indian Army Recruitment"
    entryLogoUrl="https://placekitten.com/128/128"
    categories={[
      "Soldier Tradesman",
      "Soldier Gen Duty",
      "Sol GD MT Driver",
      "Soldier Technical",
      "Soldier Clerk SKT",
      "Sepoy Pharma",
      "Religious Teacher",
      "Hav Education",
      "Soldier NA/ Dresser",
    ]}
    colorBlock="#e2f0d9"
    colorTitle="#404040"
    colorCategoryBackground="#c5e0b4"
    colorLogoBackground="#c5e0b4"
  />
));
