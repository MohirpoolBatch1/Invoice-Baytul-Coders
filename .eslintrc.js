module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parser: "@babel/eslint-parser",
  extends: ["airbnb-base", "prettier"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
    babelOptions: {
      presets: ["@babel/preset-react"],
    },
    requireConfigFile: false,
  },
  plugins: ["react", "import", "jsx-a11y", "prettier"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    "no-unused-vars": "off",
    "import/prefer-default-export": "off",
    "no-param-reassign": "off",
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    "default-param-last": "off",
  },
};
