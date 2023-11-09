# @masterworks/eslint-config-masterworks/react

React-specific rules, including rules of hooks.

## React version

This preset requires you to set the project's React version on the `settings` field of the [eslint config file](https://eslint.org/docs/user-guide/configuring/configuration-files).

```json
{
  [...]
  "settings": {
    "react": {
      "version": "18"
    }
  }
  [...]
}
```

## Using TypeScript

When using TSX, you probably want to renounce to PropType validations as TypeScript's type system is better in many ways (except it cannot catch type errors at runtime, useful for cases where the consumer of your component is not typed) and it is a lot of extra effort to keep both type validations in sync.

To opt-out of PropTypes validation for TypeScript components, disable the `react/prop-types` rule on the override for TSX files, for example:

```json
{
  [...]
  "overrides": [
    {
      "files": ["*.ts", "*.tsx", "*.d.ts"],
      "extends": [
        "@masterworks/eslint-config-masterworks/typescript",
        "@masterworks/eslint-config-masterworks/typescript-strict",
        "@masterworks/eslint-config-masterworks/typescript-stylish"
      ],
      "rules": {
        "react/default-props-match-prop-types": "off",
        "react/prop-types": "off",
        "react/require-default-props": "off"
      }
    }
  ]
  [...]
}
```

## Peer dependencies

```shell
npm install --save-dev eslint eslint-plugin-react eslint-plugin-react-hooks
```

```shell
yarn add --dev eslint eslint-plugin-react eslint-plugin-react-hooks
```

```shell
pnpm install --save-dev eslint eslint-plugin-react eslint-plugin-react-hooks
```
