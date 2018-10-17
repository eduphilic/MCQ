import http from "http";
// tslint:disable-next-line:import-name
import app from "./server";

const server = http.createServer(app);

let currentApp = app;

server.listen(process.env.PORT || 3000, (error: any) => {
  if (error) {
    // tslint:disable-next-line:no-console
    console.log(error);
  }

  // tslint:disable-next-line:no-console
  console.log("🚀 started");
});

if (module.hot) {
  // tslint:disable-next-line:no-console
  console.log("✅  Server-side HMR Enabled!");

  module.hot.accept("./server", () => {
    // tslint:disable-next-line:no-console
    console.log("🔁  HMR Reloading `./server`...");
    server.removeListener("request", currentApp);
    const newApp = require("./server").default;
    server.on("request", newApp);
    currentApp = newApp;
  });
}
