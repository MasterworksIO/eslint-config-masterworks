# @masterworks/eslint-config-masterworks/stylish

Opinionated, auto-fixable rules to add on top of [`@masterworks/eslint-config-masterworks/base`](../base/README.md).

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

Import the preset in your `eslint.config.js` file and extend it, after the `base` preset:

```js
import * as base from '@masterworks/eslint-config-masterworks/base/index.js'
import * as stylish from '@masterworks/eslint-config-masterworks/stylish/index.js'

export default [
  {
    ignores: [
      // Files to ignore globally.
    ],
  },
  base.apply({
    // ...
  }),
  stylish.apply({
    // By default it includes all JavaScript files, buy you can customize it.
    // Here we include TypeScript and JSX files as well.
    files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
    rules: {
      // Here you can customize or disable rules.
    },
  }),
]
```
