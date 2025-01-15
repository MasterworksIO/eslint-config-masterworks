import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'

export const apply = ({ files = ['**/*.jsx', '**/*.tsx'], ignores = [], rules = {} } = {}) => ({
  name: '@masterworks/eslint-config-masterworks-react',
  files,
  ignores,
  plugins: {
    react: react.configs.flat.recommended.plugins.react,
    'react-hooks': reactHooks,
  },
  languageOptions: react.configs.flat['jsx-runtime'].languageOptions,
  rules: {
    ...react.configs.flat.recommended.rules,
    // Use modern JSX runtime
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',
    // Rules of hooks
    'react-hooks/exhaustive-deps': 'error',
    'react-hooks/rules-of-hooks': 'error',
    // Warn on deprecated APIs
    'react/no-deprecated': 'warn',
    // Rest of the rules
    'react/button-has-type': 'error',
    'react/jsx-key': ['error', { checkFragmentShorthand: true }],
    'react/jsx-no-bind': ['error', { allowArrowFunctions: true }],
    'react/no-access-state-in-setstate': 'error',
    'react/no-array-index-key': 'error',
    'react/no-did-mount-set-state': 'error',
    'react/no-did-update-set-state': 'error',
    'react/no-redundant-should-component-update': 'error',
    'react/no-this-in-sfc': 'error',
    'react/no-typos': 'error',
    'react/no-unescaped-entities': [
      'error',
      {
        forbid: [
          {
            char: '>',
            alternatives: ['&gt;'],
          },
          {
            char: '}',
            alternatives: ['&#125;'],
          },
        ],
      },
    ],
    'react/no-unused-prop-types': 'error',
    'react/no-unused-state': 'error',
    'react/no-will-update-set-state': 'error',
    'react/prefer-es6-class': 'error',
    'react/prefer-stateless-function': 'error',
    'react/self-closing-comp': 'error',
    'react/style-prop-object': 'error',
    'react/void-dom-elements-no-children': 'error',
    // PropTypes are discouraged in favor of TypeScript by the React Core Team,
    // let's disable them by default.
    'react/default-props-match-prop-types': 'off',
    'react/forbid-foreign-prop-types': 'off',
    'react/prop-types': 'off',
    // User's rules
    ...rules,
  },
})
