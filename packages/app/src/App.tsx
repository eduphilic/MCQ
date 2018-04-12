import React from "react";
import { LightTheme, ThemeBaseline } from "theme";
import Home from "./pages/Home";

const App = () => (
  <ThemeBaseline>
    <LightTheme>
      <Home />
    </LightTheme>
  </ThemeBaseline>
);

export default App;
