module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    useJSXTextNode: true,
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
  ],
  rules: {
    '@typescript-eslint/await-thenable': ['error'],
    '@typescript-eslint/default-param-last': ['error'],
    '@typescript-eslint/no-dupe-class-members': ['error'],
    '@typescript-eslint/no-duplicate-imports': ['error'],
    '@typescript-eslint/no-extraneous-class': ['error'],
    '@typescript-eslint/no-floating-promises': ['error'],
    '@typescript-eslint/no-for-in-array': ['error'],
    '@typescript-eslint/no-implied-eval': ['error'],
    '@typescript-eslint/no-invalid-this': ['error'],
    '@typescript-eslint/no-invalid-void-type': ['error'],
    '@typescript-eslint/no-loss-of-precision': ['error'],
    '@typescript-eslint/no-misused-promises': ['error'],
    '@typescript-eslint/no-parameter-properties': ['error'],
    '@typescript-eslint/no-throw-literal': ['error'],
    '@typescript-eslint/no-use-before-define': ['error'],
    '@typescript-eslint/no-useless-constructor': ['error'],
    '@typescript-eslint/prefer-nullish-coalescing': ['error'],
    '@typescript-eslint/prefer-ts-expect-error': ['error'],
    '@typescript-eslint/require-array-sort-compare': ['error'],
    '@typescript-eslint/require-await': 'error',
    'default-param-last': 'off',
    'no-dupe-class-members': 'off',
    'no-duplicate-imports': 'off',
    'no-extra-parens': 'off',
    'no-invalid-this': 'off',
    'no-loss-of-precision': 'off',
    'no-redeclare': 'off',
    'no-shadow': 'off',
    'no-throw-literal': 'off',
    'no-use-before-define': 'off',
    'no-useless-constructor': 'off',
    'require-await': 'off',
  },
}
