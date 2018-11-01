module.exports = {
  root: true,
  env: {
    node: true
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
  },
  parserOptions: {
    parser: "babel-eslint"
  },
  extends: [
    "plugin:vue/base",
    "plugin:vue/essential",
    "plugin:vue/recommended",
    "plugin:vue/strongly-recommended",
    "@vue/airbnb",
    "@vue/prettier"
  ]
};
