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
      // @eslint-react is already registered by the `react` preset; ESLint
      // 10.3.0 forbids re-registering plugins. We pull in only the rules
      // here (DOM.rules, WEB_API.rules below) and rely on the `react`
      // preset for plugin registration.
      ...jsxA11y.flatConfigs.recommended.plugins,
    },
    settings: {
      ...WEB_API.settings,
    },
    rules: {
      ...DOM.rules,
      ...WEB_API.rules,
      '@eslint-react/dom-no-missing-button-type': 'error',
      '@eslint-react/dom-no-string-style-prop': 'error',
      ...jsxA11y.flatConfigs.recommended.rules,
      'jsx-a11y/alt-text': 'error',
      ...rules,
    },
  },
]
