import n from 'eslint-plugin-n'

export const apply = ({
  files = ['**/*.js', '**/*.mjs', '**/*.cjs'],
  ignores = [],
  rules = {},
} = {}) => ({
  ...n.configs['flat/recommended'],
  name: '@masterworks/eslint-config-masterworks-node',
  files,
  ignores,
  rules: {
    ...n.configs['flat/recommended'].rules,
    'n/callback-return': 'error',
    'n/global-require': 'error',
    'n/handle-callback-err': 'error',
    'n/no-mixed-requires': 'error',
    'n/no-new-require': 'error',
    'n/no-path-concat': 'error',
    'n/no-sync': 'error',
    'n/prefer-node-protocol': 'error',
    'n/prefer-global/buffer': ['error', 'never'],
    'n/prefer-global/text-decoder': ['error', 'always'],
    'n/prefer-global/text-encoder': ['error', 'always'],
    'n/prefer-global/url-search-params': ['error', 'always'],
    'n/prefer-global/url': ['error', 'always'],
    ...rules,
  },
})
