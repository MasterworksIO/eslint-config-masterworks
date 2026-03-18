import stylistic from '@stylistic/eslint-plugin'

const JS_FILES = ['**/*.js', '**/*.mjs', '**/*.cjs']
const TS_FILES = ['**/*.ts', '**/*.mts', '**/*.cts', '**/*.tsx']

const STYLISH_RULES = {
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
}

export const apply = ({
  ignores = [],
  rules = {},
} = {}) => {
  const jsConfig = {
    name: '@masterworks/eslint-config-masterworks-stylish/js',
    files: JS_FILES,
    ignores,
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      ...STYLISH_RULES,
      ...rules,
    },
  }

  const tsConfig = {
    name: '@masterworks/eslint-config-masterworks-stylish/ts',
    files: TS_FILES,
    ignores,
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      ...STYLISH_RULES,
      // TypeScript-specific stylish rules.
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
      ...rules,
    },
  }

  return [jsConfig, tsConfig]
}
