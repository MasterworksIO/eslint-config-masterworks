module.exports = {
  rules: {
    'arrow-body-style': 'error',
    'arrow-parens': ['error', 'always'],
    'arrow-spacing': 'error',
    'block-spacing': 'error',
    'camelcase': [
      'error',
      { ignoreDestructuring: true, ignoreImports: true, ignoreGlobals: true, properties: 'never' },
    ],
    'capitalized-comments': [
      'error',
      'always',
      { ignoreConsecutiveComments: true, ignoreInlineComments: true },
    ],
    'dot-location': ['error', 'property'],
    'dot-notation': 'error',
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
    'no-else-return': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-floating-decimal': 'error',
    'no-multi-spaces': 'error',
    'prefer-arrow-callback': 'error',
    'prefer-destructuring': 'error',
    'rest-spread-spacing': 'error',
    'template-curly-spacing': 'error',
    'wrap-iife': ['error', 'any'],
    'yield-star-spacing': ['error', 'after'],
    'yoda': 'error',
  },
}
