import eslintReact from '@eslint-react/eslint-plugin'

const RECOMMENDED_TYPE_CHECKED = eslintReact.configs['recommended-type-checked']
const DISABLE_DOM = eslintReact.configs['disable-dom']
const DISABLE_RSC = eslintReact.configs['disable-rsc']
const DISABLE_WEB_API = eslintReact.configs['disable-web-api']

export const apply = ({ files = ['**/*.jsx', '**/*.tsx'], ignores = [], rules = {} } = {}) => [
  {
    name: '@masterworks/eslint-config-masterworks-react',
    files,
    ignores,
    plugins: {
      ...RECOMMENDED_TYPE_CHECKED.plugins,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: RECOMMENDED_TYPE_CHECKED.settings,
    rules: {
      ...RECOMMENDED_TYPE_CHECKED.rules,
      ...DISABLE_DOM.rules,
      ...DISABLE_RSC.rules,
      ...DISABLE_WEB_API.rules,
      '@eslint-react/exhaustive-deps': 'error',
      '@eslint-react/jsx-no-children-prop': 'error',
      ...rules,
    },
  },
]
