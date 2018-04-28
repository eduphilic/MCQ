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

export const createStore = () =>
  reduxCreateStore(rootReducer, composeEnhancers(applyMiddleware(reduxThunk)));
