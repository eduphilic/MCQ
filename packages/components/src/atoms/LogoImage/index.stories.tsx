import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React from "react";
import { LogoImage } from ".";

storiesOf("Atoms", module).add("LogoImage", withInfo()(() => <LogoImage />));
