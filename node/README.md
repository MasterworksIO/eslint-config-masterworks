# @masterworks/eslint-config-masterworks/node

Use for services or scripts that run inside Node.js.

Forbids common errors, bad practices while using Node.js core modules, and the use of unavailable or deprecated APIs based on the target Node.js version.

Do NOT use when the project is intended to run on the browser or restricted environments like Cloudflare Workers.

## Node version

`eslint-plugin-node` can detect the use of unsupported features but requires the project's `package.json` to state the target Node.js version on the engine field:

```json
{
  [...]
  "engines": {
    "node": "^14.15.0"
  }
  [...]
}
```

Read more about it at [`eslint-plugin-node`'s docs](https://github.com/mysticatea/eslint-plugin-node#-install--usage).

## Peer dependencies

This preset relies on `eslint` and `eslint-plugin-node`.

```shell
npm install --save-dev eslint eslint-plugin-node
```

```shell
yarn add --dev eslint eslint-plugin-node
```

```shell
pnpm install --save-dev eslint eslint-plugin-node
```
