require("razzle/config/polyfills");

if (process.env.NODE_ENV === "development") {
  require("razzle-dev-utils/webpackHotDevClient");
}

require("./client");
