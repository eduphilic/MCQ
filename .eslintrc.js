module.exports = {
  parser: "babel-eslint",
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
    "react/jsx-filename-extension": false,
  },
  extends: ["airbnb", "prettier"],
  env: {
    browser: true,
  },
};
