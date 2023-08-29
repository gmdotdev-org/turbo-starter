const OFF = 0;
const WARN = 1;
const ERROR = 2;

/** @type {import("eslint").Linter.Config} */
const config = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
  },
  plugins: ['@typescript-eslint', 'simple-import-sort'],
  extends: [
    'next',
    'turbo',
    'prettier',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
  ],
  rules: {
    '@next/next/no-html-link-for-pages': OFF,
    '@typescript-eslint/consistent-type-imports': [
      WARN,
      {
        prefer: 'type-imports',
        fixStyle: 'inline-type-imports',
      },
    ],
    '@typescript-eslint/no-empty-function': OFF,
    '@typescript-eslint/no-unsafe-member-access': WARN,
    '@typescript-eslint/no-unused-vars': [WARN, { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-var-requires': WARN,
    'react/no-unescaped-entities': OFF,
    'simple-import-sort/imports': ERROR,
    'simple-import-sort/exports': ERROR,
  },
  ignorePatterns: [
    '**/*.config.js',
    '**/*.config.cjs',
    '.eslintrc.cjs',
    'packages/config/**',
    '**/dist/**',
    '**/.next/**',
  ],
};

module.exports = config;
