# @masterworks/eslint-config-masterworks/node

Use for services or scripts that run inside Node.js.

Forbids common errors, bad practices while using Node.js core modules, and the use of unavailable or deprecated APIs based on the target Node.js version.

By default it matches both JavaScript and TypeScript files.

Do NOT use when the project is intended to run on the browser or restricted environments like Cloudflare Workers.

## Peer dependencies

Make sure to install these peer-dependencies:

```shell
npm install --save-dev eslint eslint-plugin-n
```

```shell
yarn add --dev eslint eslint-plugin-n
```

```shell
pnpm add --save-dev eslint eslint-plugin-n
```

## Usage

Import the preset in your `eslint.config.js` file and extend it after the base preset:

```js
import * as base from '@masterworks/eslint-config-masterworks/base/index.js'
import * as node from '@masterworks/eslint-config-masterworks/node/index.js'

export default [
  {
    ignores: [
      // Files to ignore globally.
    ],
  },
  ...base.apply({
    tsconfigRootDir: import.meta.dirname,
  }),
  ...node.apply({
    // You might not need to specify files to lint at all since JavaScript and
    // TypeScript files are picked up by default. This is an example for a
    // frontend project where Node.js is only used for build scripts.
    files: ['**/*.config.js', '**/*.setup.js', '**/*.config.ts', '**/*.setup.ts'],
    rules: {
      // Here you can customize or disable rules.
    },
  }),
]
```

### Node version

`eslint-plugin-n` can detect the use of unsupported features but requires the project's `package.json` to state the target Node.js version on the engine field:

```json
{
  [...]
  "engines": {
    "node": ">=24"
  }
  [...]
}
```

Read more about it at [`eslint-plugin-n`'s docs](https://github.com/eslint-community/eslint-plugin-n/blob/master/README.md#-install--usage).
