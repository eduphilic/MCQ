import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import strings from "l10n";
import React from "react";
import styled from "styled";

const Red = styled.div`
  color: red;
`;

storiesOf("Atoms", module).add(
  "Placeholder",
  withInfo()(() => <Red>{strings.heroHeader}</Red>),
);
