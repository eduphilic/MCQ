const path: typeof import("path") = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        include: [
          path.resolve(__dirname, "../../src"),
          path.resolve(__dirname, "../stories"),
        ],
      },
    ],
  },
};
