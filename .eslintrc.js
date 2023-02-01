module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ['xo'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  ignorePatterns: ['**/public/**/*.js'],
  rules: {
    indent: ['Error', 2],
    'object-curly-spacing': ['Error', 'always'],
  },
};
