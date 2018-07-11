import React, { Component } from "react";

import { Typography } from "components/Typography";

type OnboardingSubscriptionPageProps = {};

export class OnboardingSubscriptionPage extends Component<
  OnboardingSubscriptionPageProps
> {
  render() {
    return (
      <>
        <Typography variant="cardTitle">Your Selected Entries</Typography>
      </>
    );
  }
}
