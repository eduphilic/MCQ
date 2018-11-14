import { addDecorator, configure } from "@storybook/react";
import React from "react";
import { AppProviders } from "../../src/AppProviders";
import { createClientWrapper } from "../../src/client/createClientWrapper";

const req = require.context("../stories", true, /\.stories\.tsx?$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

async function initialize() {
  const response = await fetch("/graphql", {
    credentials: "same-origin",
  });

  const csrf = response.headers.get("x-xsrf-token");
  window.__CSRF__ = csrf!;

  const ClientWrapper = createClientWrapper(true);
  addDecorator(story => (
    <ClientWrapper>
      <AppProviders>{story()}</AppProviders>
    </ClientWrapper>
  ));

  configure(loadStories, module);
}

// tslint:disable-next-line:no-floating-promises
initialize();
