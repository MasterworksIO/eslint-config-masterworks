# @masterworks/eslint-config-masterworks/typescript-strict

Set of rules to add on top of [`@masterworks/eslint-config-masterworks/typescript`](../typescript/README.md) to make your `strict: true` TypeScript projects even stricter.

## Peer dependencies

This preset itself doesn't need extra peer dependencies. Install those dictated by [`@masterworks/eslint-config-masterworks/typescript`](../typescript/README.md).

## Usage

Import the preset in your `eslint.config.js` file and extend it, after the `typescript` preset:

```js
import * as base from '@masterworks/eslint-config-masterworks/base/index.js'
import * as typescript from '@masterworks/eslint-config-masterworks/typescript/index.js'
import * as typescriptStrict from '@masterworks/eslint-config-masterworks/typescript-strict/index.js'

export default [
  {
    ignores: [
      // Files to ignore globally.
    ],
  },
  base.apply({
    // ...
  }),
  typescript.apply({
    tsconfigRootDir: import.meta.url,
    rules: {
      // ...
    },
  }),
  typescriptStrict.apply({
    rules: {
      // Here you can customize or disable rules.
    },
  }),
]
```
