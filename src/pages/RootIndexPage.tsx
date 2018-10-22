import Button from "@material-ui/core/Button";
import { RouteComponentProps } from "@reach/router";
import React, { SFC } from "react";
import { strings } from "../features/localization";
import { LandingLayout } from "../layouts";

export const RootIndexPage: SFC<RouteComponentProps> = () => (
  <LandingLayout>
    <p>Root Index Page</p>
    <Button>Test</Button>
    <Button>Test</Button>
    <Hello />
  </LandingLayout>
);

const Hello = () => <p>{strings.landingFooter}</p>;
