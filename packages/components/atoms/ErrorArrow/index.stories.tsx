import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React from "react";
import { ErrorArrow } from ".";

storiesOf("Atoms", module).add("ErrorArrow", withInfo()(() => <ErrorArrow />));
