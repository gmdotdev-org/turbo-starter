/** @type {import("eslint").Linter.Config} */
const config = {
  root: true,
  extends: ["@turbo-starter"], // uses the config in `packages/config/eslint`
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    tsconfigRootDir: __dirname,
    project: [
      "./apps/*/tsconfig.json",
      "./packages/*/tsconfig.json",
    ],
  },
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};

module.exports = config;
