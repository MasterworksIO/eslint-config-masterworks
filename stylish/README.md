# @masterworks/eslint-config-masterworks/stylish

Opinionated, auto-fixable rules to add on top of [`@masterworks/eslint-config-masterworks/base`](../base/README.md).

This preset now covers both JavaScript and TypeScript stylistic rules, including what used to live in the separate `typescript-stylish` preset.

## Peer dependencies

Make sure to install these peer-dependencies:

```shell
npm install --save-dev @stylistic/eslint-plugin
```

```shell
yarn add --dev @stylistic/eslint-plugin
```

```shell
pnpm add --save-dev @stylistic/eslint-plugin
```

## Usage

Import the preset in your `eslint.config.js` file and extend it after the `base` preset:

```js
import * as base from '@masterworks/eslint-config-masterworks/base/index.js'
import * as stylish from '@masterworks/eslint-config-masterworks/stylish/index.js'

export default [
  {
    ignores: [
      // Files to ignore globally.
    ],
  },
  ...base.apply({
    tsconfigRootDir: import.meta.dirname,
  }),
  ...stylish.apply({
    rules: {
      // Here you can customize or disable rules.
    },
  }),
]
```
