module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: ['prettier', 'plugin:@typescript-eslint/recommended'],
  plugins: ['prettier'],
  env: {
    es6: true,
    jest: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  globals: {
    on: true, // for the Socket file
  },
  rules: {
    'array-bracket-spacing': [
      'error',
      'never',
      {
        objectsInArrays: false,
        arraysInArrays: false,
      },
    ],
    'arrow-parens': ['error', 'always'],
    'arrow-spacing': ['error', { before: true, after: true }],
    'comma-dangle': ['error', 'always-multiline'],
    curly: 'error',
    'eol-last': 'error',
    'func-names': 'off',
    'id-length': [
      'error',
      {
        min: 1,
        max: 50,
        properties: 'never',
        exceptions: ['e', 'i', 'n', 't', 'x', 'y', 'z', '_', '$'],
      },
    ],
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    'no-alert': 'error',
    'no-console': 'off',
    'no-const-assign': 'error',
    'no-else-return': 'error',
    'no-empty': 'off',
    'no-undef': 'error',
    'no-unused-vars': 'error',
    'no-use-before-define': 'error',
    'no-useless-constructor': 'error',
    'object-curly-newline': 'off',
    'object-shorthand': 'off',
    'prefer-const': 'error',
    'prefer-destructuring': ['error', { object: true, array: false }],
    quotes: [
      'error',
      'single',
      {
        allowTemplateLiterals: true,
        avoidEscape: true,
      },
    ],
    semi: ['error', 'always'],
    'spaced-comment': 'error',
    strict: ['error', 'global'],
  },
};
