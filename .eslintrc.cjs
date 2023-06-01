module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'airbnb-typescript',
    "airbnb",
    "airbnb/hooks"
  ],
  overrides: [
  ],
  parser:"@typescript/eslint-parser",
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    'react/react-in-jsx-scope': 0,
  }
}
