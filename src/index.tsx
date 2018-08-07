import React from "react";
import { hydrate, render } from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root")!;
const renderFunc = rootElement.hasChildNodes() ? hydrate : render;

renderFunc(<App />, document.getElementById("root"));
