const proxy = require("http-proxy-middleware");

const proxyConfig = {
  "/graphql": "http://localhost:5000",
};

module.exports = function expressMiddleware(router) {
  for (const url in proxyConfig) {
    router.use(
      url,
      proxy({
        target: proxyConfig[url],
      }),
    );
  }
};
