# @masterworks/eslint-config-masterworks/react-stylish

Opinionated, auto-fixable rules to add on top of [`@masterworks/eslint-config-masterworks/react`](../react/README.md), mainly for JSX syntax.

## Peer dependencies

This preset itself doesn't need extra peer dependencies. Install those dictated by [`@masterworks/eslint-config-masterworks/react`](../react/README.md).

## Usage

Make sure to have the base and react presets installed and configured in your `eslint.config.js` file before adding this one:

```js
import * as base from '@masterworks/eslint-config-masterworks/base/index.js'
import * as react from '@masterworks/eslint-config-masterworks/react/index.js'
import * as reactStylish from '@masterworks/eslint-config-masterworks/react-stylish/index.js'

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
    files: ['**/*.jsx', '**/*.tsx', '**/use*.js', '**/use*.ts'],
    rules: {
      // ...
    },
  }),
  reactStylish.apply({
    // If you have customized the files for the react preset, you should do the same here.
    files: ['**/*.jsx', '**/*.tsx', '**/use*.js', '**/use*.ts'],
    rules: {
      // Here you can customize or disable rules.
    }
  }),
]
```
