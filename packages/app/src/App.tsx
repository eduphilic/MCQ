import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { LightTheme, ThemeBaseline } from "theme";
import Home from "./pages/Home";

const App = () => (
  <ThemeBaseline>
    <LightTheme>
      <Router>
        <Home />
      </Router>
    </LightTheme>
  </ThemeBaseline>
);

export default App;
