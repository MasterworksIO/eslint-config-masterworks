# @masterworks/eslint-config-masterworks/typescript

Base TypeScript rules. Replaces some of `@masterworks/eslint-config-masterworks/base` rules that are incompatible with TypeScript.

It also enables some check that are not possible without TypeScript but are unrelated to the type system itself.

Use [`@masterworks/eslint-config-masterworks/typescript-strict`](../typescript-strict/README.md) to expand TypeScript's checks.

## Peer dependencies

This preset requires `typescript` itself and `typescript-eslint` to generate type information, in addition to `eslint` and the [`base` preset](../base/README.md) peer dependencies.

```shell
npm install --save-dev typescript typescript-eslint
```

```shell
yarn add --dev typescript typescript-eslint
```

```shell
pnpm add --save-dev typescript typescript-eslint
```

## Usage

Import the preset in your `eslint.config.js` file and extend it, after the `base` preset:

```js
import * as base from '@masterworks/eslint-config-masterworks/base/index.js'
import * as typescript from '@masterworks/eslint-config-masterworks/typescript/index.js'

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
    // By default it includes all TypeScript files. You rarely need to update it.
    // The following are the defaults.
    // files: ['**/*.ts', '**/*.mts', '**/*.cts', '**/*.tsx'],

    // This setting is required to resolve the correct tsconfig.json file.
    // In this case we are assuming it is right next to the ESLint configuration file.
    tsconfigRootDir: import.meta.url,
    rules: {
      // Here you can customize or disable rules.
    },
  }),
]
```
