import React from "react";
import ThemeProvider from "site-components/ThemeProvider";
import Home from "./pages/Home";

const App = () => (
  <ThemeProvider>
    <Home />
  </ThemeProvider>
);

export default App;
