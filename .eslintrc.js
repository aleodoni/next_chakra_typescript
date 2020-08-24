module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended'
  ],
  globals: {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    "react",
    "react-hooks",
    "@typescript-eslint",
    "prettier"
  ],
  "rules": {
    "import/no-duplicates": "off",
    "react/button-has-type": [0],
    "prettier/prettier": "error",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/jsx-filename-extension": [1, { "extensions": [".tsx"] }],
    "import/prefer-default-export": "off",
    "react/jsx-props-no-spreading": "off",
    "react/prop-types": "off",
    "no-unused-expressions": "off",
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      {
        "allowExpressions": true
      }
    ],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "ts": "never",
        "tsx": "never"
      }
    ]

  },
  "settings": {
    "import/resolver": {
      "typescript": {}
    }
  }
};
