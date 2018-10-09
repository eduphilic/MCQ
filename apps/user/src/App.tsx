import React from "react";
// import { hot } from "react-hot-loader";
import { Provider } from "react-redux";
import { createStore } from "store";
import { LightTheme, ThemeBaseline } from "theme";

import { SiteMap } from "./pages";

const store = createStore();

const App = () => (
  <Provider store={store}>
    <ThemeBaseline>
      <LightTheme>
        <SiteMap />
      </LightTheme>
    </ThemeBaseline>
  </Provider>
);

// export default hot(module)(App);
export default App;
