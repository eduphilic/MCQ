module.exports = {
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
    "react/jsx-filename-extension": false,
  },
  extends: ["airbnb", "prettier"],
};
