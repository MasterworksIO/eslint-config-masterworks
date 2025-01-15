export const apply = ({
  files = ['**/*.ts', '**/*.mts', '**/*.cts', '**/*.tsx'],
  ignores = [],
  rules = {},
} = {}) => ({
  name: '@masterworks/eslint-config-masterworks-typescript-stylish',
  files,
  ignores,
  rules: {
    '@typescript-eslint/consistent-generic-constructors': 'error',
    '@typescript-eslint/consistent-indexed-object-style': ['error', 'record'],
    '@typescript-eslint/consistent-type-assertions': 'error',
    '@typescript-eslint/consistent-type-exports': 'error',
    '@typescript-eslint/consistent-type-imports': [
      'error',
      { prefer: 'type-imports', fixStyle: 'separate-type-imports' },
    ],
    '@typescript-eslint/member-ordering': 'warn',
    '@typescript-eslint/no-inferrable-types': 'warn',
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
    '@typescript-eslint/no-unnecessary-condition': 'error',
    '@typescript-eslint/no-unnecessary-type-arguments': 'error',
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',
    '@typescript-eslint/no-unnecessary-type-constraint': 'error',
    '@typescript-eslint/prefer-as-const': 'error',
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/prefer-includes': 'error',
    '@typescript-eslint/prefer-nullish-coalescing': [
      'error',
      {
        ignoreConditionalTests: true,
        ignorePrimitives: true,
        ignoreTernaryTests: true,
      },
    ],
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/prefer-readonly': 'error',
    '@typescript-eslint/prefer-reduce-type-parameter': 'error',
    '@typescript-eslint/prefer-string-starts-ends-with': 'error',
    '@typescript-eslint/sort-type-constituents': 'error',
    '@typescript-eslint/unified-signatures': 'error',
    // Disable cumbersome rules.
    '@typescript-eslint/no-unnecessary-type-parameters': 'off',
    // Disable conflicting rules.
    'import/consistent-type-specifier-style': 'off',
    ...rules,
  },
})
