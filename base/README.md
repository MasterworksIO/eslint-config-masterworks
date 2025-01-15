# @masterworks/eslint-config-masterworks/base

You should always include it as the base for the other presets. It is basically the [`eslint:recommended` preset](https://eslint.org/docs/rules/) with some extra few rules enabled and support for linting ESM imports.

## Peer dependencies

Make sure to install these peer-dependencies:

```shell
npm install --save-dev @eslint/js eslint eslint-import-resolver-typescript eslint-plugin-import-x
```

```shell
yarn add --dev @eslint/js eslint eslint-import-resolver-typescript eslint-plugin-import-x
```

```shell
pnpm add --save-dev @eslint/js eslint eslint-import-resolver-typescript eslint-plugin-import-x
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
  base.apply({
    // You might not need to specify files to lint
    // as it will pick up all JavaScript files by default.
    // Example for a react project.
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    rules: {
      // Here you can customize or disable rules.
    },
  }),
]
```
