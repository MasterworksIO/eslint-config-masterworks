import tseslint from 'typescript-eslint'

export const apply = ({
  files = ['**/*.ts', '**/*.mts', '**/*.cts', '**/*.tsx'],
  ignores = [],
  rules = {},
} = {}) => ({
  name: '@masterworks/eslint-config-masterworks-typescript-strict',
  files,
  ignores,
  rules: {
    ...tseslint.configs.strictTypeChecked.reduce(
      (acc, next) => ({
        ...acc,
        ...next.rules,
      }),
      {},
    ),
    '@typescript-eslint/adjacent-overload-signatures': 'warn',
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowConciseArrowFunctionExpressionsStartingWithVoid: true,
        allowExpressions: true,
        allowIIFEs: true,
      },
    ],
    '@typescript-eslint/no-deprecated': 'warn',
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
    ...rules,
  },
})
