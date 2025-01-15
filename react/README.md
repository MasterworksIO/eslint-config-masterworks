# @masterworks/eslint-config-masterworks/react

React-specific rules, including rules of hooks.

## Peer dependencies

Make sure to install these peer-dependencies:

```shell
npm install --save-dev eslint-plugin-react eslint-plugin-react-hooks
```

```shell
yarn add --dev eslint-plugin-react eslint-plugin-react-hooks
```

```shell
pnpm add --save-dev eslint-plugin-react eslint-plugin-react-hooks
```

## Usage

Import the preset in your `eslint.config.js` file and extend it:

```js
import * as base from '@masterworks/eslint-config-masterworks/base/index.js'
import * as react from '@masterworks/eslint-config-masterworks/react/index.js'

export default [
  {
    ignores: [
      // Files to ignore globally.
    ],
  },
  base.apply({
    // ...
  }),
  react.apply({
    // By default it includes all .jsx and .tsx files, buy you can customize it.
    files: ['**/*.jsx', '**/*.tsx', '**/use*.js', '**/use*.ts'],
    rules: {
      // Here you can customize or disable rules.
      'react/style-prop-object': [
        'error',
        {
          allow: ['FormattedNumber'],
        },
      ],
    },
  }),
]
```

## A note on PropTypes

This preset does not include any rules for PropTypes as they have been deprecated and removed by the React Core Team.

See: https://react.dev/blog/2024/04/25/react-19-upgrade-guide#removed-proptypes-and-defaultprops

If you still use PropTypes, you could add the following rules to your project's ESLint configuration:

```js
// ...

export default [
  // ...
  react.apply({
    rules: {
      'react/default-props-match-prop-types': 'warn',
      'react/forbid-foreign-prop-types': 'warn',
      'react/no-unused-prop-types': 'warn',
      'react/prop-types': 'warn',
    },
  }),
  // ...
]
```
