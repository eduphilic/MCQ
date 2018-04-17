import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React from "react";
import { PageFooter } from ".";

storiesOf("Atoms", module).add("PageFooter", withInfo()(() => <PageFooter />));
