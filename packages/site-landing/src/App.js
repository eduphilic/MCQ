import React from "react";
import { ThemeBaseline, ThemeProvider } from "site-components/theme";
import Home from "./pages/Home";

const App = () => (
  <ThemeBaseline>
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  </ThemeBaseline>
);

export default App;
