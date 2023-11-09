module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    useJSXTextNode: true,
    project: true,
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:import/typescript',
  ],
  rules: {
    '@typescript-eslint/class-methods-use-this': 'error',
    '@typescript-eslint/default-param-last': 'error',
    '@typescript-eslint/no-dupe-class-members': 'error',
    '@typescript-eslint/no-unused-expressions': 'error',
    '@typescript-eslint/no-use-before-define': 'error',
    '@typescript-eslint/parameter-properties': 'error',
    '@typescript-eslint/require-array-sort-compare': 'error',
    '@typescript-eslint/unbound-method': ['error', { ignoreStatic: true }],
    // Disable conflicting rules
    'class-methods-use-this': 'off',
    'default-param-last': 'off',
    'no-dupe-class-members': 'off',
    'no-duplicate-imports': 'off',
    'no-invalid-this': 'off',
    'no-redeclare': 'off',
    'no-unused-expressions': 'off',
    'no-use-before-define': 'off',
  },
}
