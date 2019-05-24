// @ts-check

// Suppress: Cannot compile namespaces when the '--isolatedModules' flag is provided.ts(1208)
// @ts-ignore
if (true) {
}

const withTypescript = require("@zeit/next-typescript");

/**
 * @type {import("next-config").NextCustomizedConfig}
 */
module.exports = withTypescript({
  poweredByHeader: false,
});
