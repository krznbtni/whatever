module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:svelte/recommended',
    'plugin:svelte/prettier',
    'prettier',
  ],
  plugins: ['@typescript-eslint'],
  ignorePatterns: ['*.cjs', 'vite.config.js', 'svelte.config.js'],
  overrides: [
    {
      files: ['*.svelte'],
      parser: 'svelte-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
    },
  ],
  settings: {
    svelte: {
      ignoreWarnings: ['svelte/no-at-html-tags'],
    },
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    extraFileExtensions: ['.svelte'],
  },
  env: {
    browser: true,
    es2017: true,
    node: true,
  },
  rules: {
    // * JavaScript
    'arrow-body-style': ['error'],
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],
    'no-unused-expressions': ['error'],
    'prefer-arrow-callback': ['error'],
    'no-unused-expressions': ['off'],
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],

    // * TypeScript
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
  },
};
