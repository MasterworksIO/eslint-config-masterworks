# @masterworks/eslint-config-masterworks/react

Core React-specific rules, including rules of hooks.

This preset assumes a modern ESM + TypeScript React stack. It still includes `.jsx` by default for compatibility, but `.tsx` is the primary target.

It stays framework-agnostic and does not assume React DOM, Web APIs, or React Server Components. Use [`@masterworks/eslint-config-masterworks/react-web`](../react-web/README.md) on top when linting web applications.

## Peer dependencies

Make sure to install these peer-dependencies:

```shell
npm install --save-dev @eslint-react/eslint-plugin
```

```shell
yarn add --dev @eslint-react/eslint-plugin
```

```shell
pnpm add --save-dev @eslint-react/eslint-plugin
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
  ...base.apply({
    tsconfigRootDir: import.meta.dirname,
  }),
  ...react.apply({
    // By default it includes all .jsx and .tsx files, but you can customize it.
    files: ['**/*.jsx', '**/*.tsx', '**/use*.js', '**/use*.ts'],
    rules: {
      // Here you can customize or disable rules.
      '@eslint-react/no-unused-state': 'warn',
    },
  }),
]
```
