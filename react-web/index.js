import eslintReact from '@eslint-react/eslint-plugin'
import jsxA11y from 'eslint-plugin-jsx-a11y'

const DOM = eslintReact.configs.dom
const WEB_API = eslintReact.configs['web-api']

export const apply = ({ files = ['**/*.jsx', '**/*.tsx'], ignores = [], rules = {} } = {}) => [
  {
    name: '@masterworks/eslint-config-masterworks-react-web',
    files,
    ignores,
    plugins: {
      ...DOM.plugins,
      ...WEB_API.plugins,
      ...jsxA11y.flatConfigs.recommended.plugins,
    },
    settings: {
      ...WEB_API.settings,
    },
    rules: {
      ...DOM.rules,
      ...WEB_API.rules,
      '@eslint-react/dom/no-missing-button-type': 'error',
      '@eslint-react/dom/no-string-style-prop': 'error',
      ...jsxA11y.flatConfigs.recommended.rules,
      'jsx-a11y/alt-text': 'error',
      ...rules,
    },
  },
]
