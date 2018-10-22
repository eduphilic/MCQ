import Button from "@material-ui/core/Button";
import { RouteComponentProps } from "@reach/router";
import React, { SFC } from "react";
import { strings } from "../features/localization";

export const RootIndexPage: SFC<RouteComponentProps> = () => (
  <>
    <p>Root Index Page</p>
    <Button>Test</Button>
    <Button>Test</Button>
    <Hello />
  </>
);

const Hello = () => <p>{strings.landingFooter}</p>;
