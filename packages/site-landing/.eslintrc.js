module.exports = {
  rules: {
    // Next.js provides React globally so it doesn't need to be included at the
    // top of every file.
    "react/react-in-jsx-scope": 0,
  },
  extends: "../../.eslintrc.js",
};
