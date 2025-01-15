import stylistic from '@stylistic/eslint-plugin'

export const apply = ({
  files = ['**/*.js', '**/*.mjs', '**/*.cjs'],
  ignores = [],
  rules = {},
} = {}) => ({
  name: '@masterworks/eslint-config-masterworks-stylish',
  files,
  ignores,
  plugins: {
    '@stylistic': stylistic,
  },
  rules: {
    'arrow-body-style': 'error',
    'camelcase': [
      'error',
      {
        ignoreDestructuring: true,
        ignoreImports: true,
        ignoreGlobals: true,
        properties: 'never',
      },
    ],
    'capitalized-comments': [
      'error',
      'always',
      { ignoreConsecutiveComments: true, ignoreInlineComments: true },
    ],
    'dot-notation': 'error',
    'no-else-return': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'prefer-arrow-callback': 'error',
    'yoda': 'error',
    // Import plugin rules.
    'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
    'import/order': [
      'warn',
      {
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object'],
        'newlines-between': 'always',
      },
    ],
    // New rules from stylistic plugin.
    '@stylistic/arrow-parens': ['error', 'always'],
    '@stylistic/arrow-spacing': 'error',
    '@stylistic/block-spacing': 'error',
    '@stylistic/dot-location': ['error', 'property'],
    '@stylistic/no-floating-decimal': 'error',
    '@stylistic/no-multi-spaces': 'error',
    '@stylistic/rest-spread-spacing': 'error',
    '@stylistic/template-curly-spacing': 'error',
    '@stylistic/wrap-iife': ['error', 'any'],
    '@stylistic/yield-star-spacing': ['error', 'after'],
    // Overrides.
    ...rules,
  },
})
