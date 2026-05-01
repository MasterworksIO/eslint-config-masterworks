import stylistic from '@stylistic/eslint-plugin'

export const apply = ({ files = ['**/*.jsx', '**/*.tsx'], ignores = [], rules = {} } = {}) => [
  {
    name: '@masterworks/eslint-config-masterworks-react-stylish',
    files,
    ignores,
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      '@eslint-react/jsx-no-useless-fragment': 'error',
      '@stylistic/jsx-closing-bracket-location': 'error',
      '@stylistic/jsx-closing-tag-location': 'error',
      '@stylistic/jsx-curly-spacing': 'error',
      '@stylistic/jsx-equals-spacing': ['error', 'never'],
      '@stylistic/no-multi-spaces': 'error',
      '@stylistic/jsx-self-closing-comp': 'error',
      '@stylistic/jsx-tag-spacing': 'error',
      '@stylistic/jsx-wrap-multilines': [
        'error',
        {
          arrow: 'parens-new-line',
          assignment: 'parens-new-line',
          condition: 'parens-new-line',
          declaration: 'parens-new-line',
          logical: 'parens-new-line',
          return: 'parens-new-line',
        },
      ],
      ...rules,
    },
  },
]
