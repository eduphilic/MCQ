import { forceReRender, storiesOf } from "@storybook/react";
import React from "react";
import { Button } from "../Button";
import { LoadingSpinnerProvider } from "../LoadingSpinner";
import { storiesProps as loadingSpinnerStoriesProps } from "../LoadingSpinner/storiesProps";
import { SubmissionProgressDialog } from "./SubmissionProgressDialog";

let open = false;

const stories = storiesOf("SubmissionProgressDialog", module);

stories.add("default", () => (
  <LoadingSpinnerProvider {...loadingSpinnerStoriesProps}>
    <>
      <SubmissionProgressDialog open={open} />

      <Button
        onClick={() => {
          open = true;
          setTimeout(() => {
            open = false;
            forceReRender();
          }, 2000);
          forceReRender();
        }}
      >
        Open Dialog
      </Button>
    </>
  </LoadingSpinnerProvider>
));
