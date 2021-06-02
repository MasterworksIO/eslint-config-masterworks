module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: ['plugin:jsx-a11y/recommended'],
  plugins: ['eslint-plugin-react', 'eslint-plugin-jsx-a11y'],
  rules: {
    'react/jsx-key': ['error', { checkFragmentShorthand: true }],
    'react/jsx-no-bind': ['error', { allowArrowFunctions: true }],
    'react/jsx-no-comment-textnodes': 'error',
    'react/jsx-no-undef': 'error',
    'react/jsx-uses-vars': 'error',
    'react/no-children-prop': 'error',
  },
}
