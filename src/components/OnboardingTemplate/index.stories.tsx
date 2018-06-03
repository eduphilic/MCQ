import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import styled from "styled";
import { OnboardingTemplate } from ".";
import { createPlaceholderOnboardingTemplateProps } from "./createPlaceholderOnboardingTemplateProps";

storiesOf("Components", module)
  .addDecorator(story => <Router>{story()}</Router>)
  .add(
    "OnboardingTemplate",
    withInfo()(() => {
      const props = createPlaceholderOnboardingTemplateProps({
        selectionSummariesCount: 2,
      });

      return (
        <Window>
          <OnboardingTemplate {...props} />
        </Window>
      );
    }),
  );

const Window = styled.div`
  height: 100vh;
`;
