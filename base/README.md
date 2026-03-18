# @masterworks/eslint-config-masterworks/base

You should always include it as the base for the other presets. It covers JavaScript and TypeScript by default, building on top of the [`eslint:recommended` preset](https://eslint.org/docs/rules/) with extra rules enabled and support for linting ESM imports.

## Peer dependencies

Make sure to install these peer-dependencies:

```shell
npm install --save-dev @eslint/js eslint eslint-import-resolver-typescript eslint-plugin-import-x typescript typescript-eslint
```

```shell
yarn add --dev @eslint/js eslint eslint-import-resolver-typescript eslint-plugin-import-x typescript typescript-eslint
```

```shell
pnpm add --save-dev @eslint/js eslint eslint-import-resolver-typescript eslint-plugin-import-x typescript typescript-eslint
```

## Usage

Import the preset in your `eslint.config.js` file and extend it:

```js
import * as base from '@masterworks/eslint-config-masterworks/base/index.js'

export default [
  {
    ignores: [
      '**/dist/**',
      '**/node_modules/**',
      // All other files you want to ignore.
    ],
  },
  ...base.apply({
    // The base preset lints JavaScript and TypeScript by default.
    // Point it at the project's tsconfig.json location.
    tsconfigRootDir: import.meta.dirname,
    rules: {
      // Here you can customize or disable rules.
    },
  }),
]
```
