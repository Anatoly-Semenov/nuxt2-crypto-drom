module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: 2020
  },
  extends: [
    "google",
    "eslint:recommended",
    "plugin:vue/essential",
    "plugin:prettier/recommended",
    "@vue/typescript/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  // required to lint *.vue files
  plugins: ["vue"],
  // add your custom rules here
  rules: {
    indent: ["error", "tab", { SwitchCase: 1 }],
    semi: ["error", "never"],
    "no-mixed-spaces-and-tabs": ["error", "smart-tabs"],
    "no-console": 0,
    "no-tabs": 0,
    "linebreak-style": 0,
    "require-jsdoc": "off",
    camelcase: 0,
    // Vue
    "vue/html-indent": ["error", "tab"],
    // ts
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-inferrable-types": 0,
    "@typescript-eslint/no-empty-function": 0,
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "@typescript-eslint/no-non-null-assertion": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/no-unused-vars": 0,
    "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/no-this-alias": 0,
    "@typescript-eslint/quotes": "off"
  }
}
