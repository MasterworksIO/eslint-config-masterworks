# @masterworks/eslint-config-masterworks/jsx

Rules specific to JSX, not strictly necessary in relation to React, but commonly used with [`@masterworks/eslint-config-masterworks/react`](../react/README.md).

It prevents common errors when writing JSX code and also prevents creating non-accessible markup by leveraging [eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y).

## Code styling

This presets doesn't cover any rules related to coding style. Refer to [`@masterworks/eslint-config-masterworks/jsx-stylish`](../jsx-stylish/README.md) for that.

## Peer dependencies

```shell
npm install --save-dev eslint eslint-plugin-jsx-a11y eslint-plugin-react
```

```shell
yarn add --dev eslint eslint-plugin-jsx-a11y eslint-plugin-react
```

```shell
pnpm install --save-dev eslint eslint-plugin-jsx-a11y eslint-plugin-react
```
