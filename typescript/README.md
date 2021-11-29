# @masterworks/eslint-config-masterworks/typescript

Base TypeScript rules. Replaces some of `@masterworks/eslint-config-masterworks/base` rules that are incompatible with TypeScript.


It also enables some check that are not possible without TypeScript but are unrelated to the type system itself.

Use [`@masterworks/eslint-config-masterworks/typescript-strict`](../typescript-strict/README.md) to expand TypeScript's checks.

## Selectively targeting TypeScript files

Ideally, TypeScript-specific presets should be enabled only for TypeScript files; use [ESLint overrides feature](https://eslint.org/docs/user-guide/configuring/configuration-files#how-do-overrides-work) to achieve it:

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
      ]
    }
  ]
  [...]
}
```

## Peer dependencies

This present requires `typescript` itself and the `@typescript-eslint/parser` to generate type information.

```shell
npm install --save-dev eslint typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

```shell
yarn add --dev eslint typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

```shell
pnpm install --save-dev eslint typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

This preset also assumes [`@masterworks/eslint-config-masterworks/modules`](../modules/README.md) has been extended already and its peer dependencies are installed as well.
