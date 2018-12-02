import replace from "rollup-plugin-replace";
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";
import json from "rollup-plugin-json";
import firebaseServiceAccountCredentials from "../../firebase-admin-service-account.json";

export default {
  input: "src/index.ts",
  output: {
    file: "../../dist/functions/index.js",
    format: "cjs",
  },
  external: id => /node_modules/.test(id),
  plugins: [
    replace({
      "process.env.FIREBASE_SERVICE_ACCOUNT_CREDENTIALS": JSON.stringify(
        JSON.stringify(firebaseServiceAccountCredentials),
      ),
    }),
    json(),
    commonjs(),
    resolve({
      extensions: [".mjs", ".js", ".jsx", ".json", ".ts", ".tsx"],
      only: [/join-uniform-server.src/],
      preferBuiltins: true,
    }),
    babel({
      include: ["./src/**"],
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    }),
  ],
};
