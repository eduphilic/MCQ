import {
  applyMiddleware,
  compose,
  createStore as reduxCreateStore,
} from "redux";
import reduxThunk from "redux-thunk";
import { rootReducer } from "./rootReducer";

const location = window.location.href;
const isStaging = /^https:\/\/dev.bhartitest.com/.test(location);

const composeEnhancers =
  process.env.NODE_ENV === "development" || isStaging
    ? ((window as any)
        .__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ as typeof compose) || compose
    : compose;

export const createStore = () => {
  const store = reduxCreateStore(
    rootReducer,
    composeEnhancers(applyMiddleware(reduxThunk)),
  );

  // Enable hot module replacement.
  // Ref: https://github.com/reactjs/react-redux/releases/tag/v2.0.0
  if (module.hot) {
    module.hot.accept("./rootReducer", () => {
      const nextRootReducer = require("./rootReducer")
        .rootReducer as typeof rootReducer;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};
