import React, { SFC } from "react";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";

import { Typography } from "components/Typography";

// tslint:disable-next-line:no-empty-interface
export interface SettingsPageProps {}

export const SettingsPage: SFC<SettingsPageProps> = props => {
  const {} = props;

  return (
    <Card>
      <CardHeader
        title={<Typography variant="cardTitle">Basic Information</Typography>}
      />
    </Card>
  );
};
