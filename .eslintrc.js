/* eslint-disable no-undef */
module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "security", "jest"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:security/recommended",
    "plugin:jest/recommended",
  ],
  rules: {
    "@typescript-eslint/explicit-module-boundary-types": "off",
  },
};
