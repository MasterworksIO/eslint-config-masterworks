import jsxA11y from 'eslint-plugin-jsx-a11y'

export const apply = ({ files = ['**/*.jsx', '**/*.tsx'], ignores = [], rules = {} } = {}) => ({
  name: '@masterworks/eslint-config-masterworks-react-web',
  files,
  ignores,
  plugins: jsxA11y.flatConfigs.recommended.plugins,
  rules: {
    ...jsxA11y.flatConfigs.recommended.rules,
    'jsx-a11y/alt-text': 'error',
    ...rules,
  },
})
