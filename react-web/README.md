# @masterworks/eslint-config-masterworks/react-web

Adds JSX accessibility best-practices on top of the `react` preset. For use in web projects only, do NOT use in react-native or Expo projects.

## Peer dependencies

Make sure to install these peer-dependencies:

```shell
npm install --save-dev eslint-plugin-jsx-a11y
```

```shell
yarn add --dev eslint-plugin-jsx-a11y
```

```shell
pnpm add --save-dev eslint-plugin-jsx-a11y
```

## Usage


Make sure to have the base and react presets installed and configured in your `eslint.config.js` file before adding this one:


```js
import * as base from '@masterworks/eslint-config-masterworks/base/index.js'
import * as react from '@masterworks/eslint-config-masterworks/react/index.js'
import * as reactWeb from '@masterworks/eslint-config-masterworks/react-web/index.js'

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
  reactWeb.apply({
    // If you have customized the files for the react preset, you should do the same here.
    files: ['**/*.jsx', '**/*.tsx', '**/use*.js', '**/use*.ts'],
    rules: {
      // Here you can customize or disable rules.
    },
  }),
]
```
