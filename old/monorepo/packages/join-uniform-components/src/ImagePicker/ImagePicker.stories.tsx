import { css } from "@join-uniform/theme";
import { storiesOf } from "@storybook/react";
import React from "react";
import { ImagePicker } from "./ImagePicker";

const stories = storiesOf("ImagePicker", module);

stories.addDecorator(story => (
  <div
    css={css`
      margin: 8px;
    `}
  >
    {story()}
  </div>
));

stories.add("with selected image", () => (
  <ImagePicker
    previewImageUrl="https://placekitten.com/128/128"
    uploadedImageUrl="https://placekitten.com/128/128"
  />
));

stories.add("with no selected image", () => (
  <ImagePicker previewImageUrl={null} uploadedImageUrl={null} />
));
