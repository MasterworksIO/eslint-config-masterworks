module.exports = {
  extends: ['plugin:@typescript-eslint/strict-type-checked'],
  rules: {
    '@typescript-eslint/adjacent-overload-signatures': 'warn',
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowExpressions: true,
      },
    ],
    '@typescript-eslint/no-invalid-void-type': [
      'error',
      {
        allowAsThisParameter: true,
        allowInGenericTypeArguments: true,
      },
    ],
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/prefer-enum-initializers': 'error',
    '@typescript-eslint/promise-function-async': 'error',
    '@typescript-eslint/switch-exhaustiveness-check': 'error',
    // Disable conflicting rules
    'no-shadow': 'off',
  },
}
