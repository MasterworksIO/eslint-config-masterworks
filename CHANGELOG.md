# Changelog

## Unreleased

- Upgrade to eslint v9 and update all dependencies

### Flat Config

This major release requires a complete rewrite of your projects' ESLint config file as we moved to the new Flat Config format.

Start by reading ESLint's migration guide: https://eslint.org/docs/latest/use/configure/migration-guide

### ESM-only

This release moves forward and assumes ESM-only projects, so if you're still using CommonJS, you'll need to update your project to use ESM first.

### Peer-dependencies

Some peer dependencies have been changed:

- `@typescript-eslint/eslint-plugin` -> `typescript-eslint`
- `eslint-plugin-import` -> `eslint-plugin-import-x`
- `eslint-plugin-node` -> `eslint-plugin-n`
- `@typescript-eslint/parser` is now packaged into `typescript-eslint`
- The resolver has changed to `eslint-import-resolver-typescript`

Packages to remove:

```
eslint-plugin-import eslint-plugin-node @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

Packages to add:

```
@eslint/js eslint-plugin-import-x eslint-plugin-n typescript-eslint eslint-import-resolver-typescript
```

Packages to update:

```
eslint eslint-plugin-jsx-a11y eslint-plugin-react-hooks eslint-plugin-react
```

### Prettier

The `prettier` entry has been changed from .cjs to .js, as we are now using ESM-only.

```diff
-  "prettier": "@masterworks/eslint-config-masterworks/prettier",
+  "prettier": "@masterworks/eslint-config-masterworks/prettier/prettier.js",
```

### TypeScript

The minimum compatible TypeScript version is now 5.7.3.

### React PropTypes

Rules related to PropTypes have been removed, as they have been deprecated and removed by the React Core Team. You should ideally remove PropTypes from your project and use TypeScript instead.

### Improved detection of deprecated APIs

Most presets have warnings for the usage of deprecated rules. With the different upgrades this detection has improved and you most probably will get new warnings.


## 3.0.0 - 2023-11-16

- Upgrade all dependencies and modernize presets

## 2.1.1 - 2022-01-10

- Fix pnpm install failing because of our publish script

## 2.1.0 - 2021-12-22

- Update docs about ditching prop-types when working with TS
- Don't error on missing return type for function expressions

## 2.0.0 - 2021-11-29

- Add documentation for individual presets and fix some broken links
- Move some rules out of typescript into strict and stylish variants
- Upgrade peerDependencies and add missing packages to the workspace

## 1.0.0 - 2021-11-02

- Modernize react presets, only v17+ is supported now
- Remove react/destructuring-assignment
- Remove @typescript-eslint/no-extra-parens
- Add documentation

## 0.1.0 - 2021-06-02

- Initial release
