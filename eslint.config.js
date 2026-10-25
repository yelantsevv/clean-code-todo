import globals from 'globals';

export default [
  {
    ignores: ['node_modules/**'],
  },
  {
    files: ['app.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'script',
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      'no-var': 'error',
      'prefer-const': 'error',
      'no-console': 'error',
    },
  },
];
