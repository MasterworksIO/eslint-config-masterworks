# eslint-config-masterworks

[ESLint config presets](https://eslint.org/docs/user-guide/configuring/configuration-files#extending-configuration-files) for Masterworks.

Version 7 requires Node.js `>=24`, is ESM-only, and assumes TypeScript by default.

## Why

At Masterworks, we use JavaScript and TypeScript extensively across a multitude of repositories and environments. We want to have a consistent style across projects, enforce practices we deem "good", and catch those silly bugs & typos we all fall for once in a while.

In practice, every project is unique and one-fits-all solutions don't exist; some projects use JSX, some lack ES Modules support, some run in AWS Lambdas, some run in Internet Explorer 11, some use TypeScript, some don't, and so on.

For that reason, we don't recommend a single holistic config, instead, we group rules into several presets by their intended context and scope — trying to balance granularity and convenience — from which you can extend based on the project setup or runtime environment.

## Before you continue

Read a little bit about [ESLint](https://eslint.org/docs/user-guide/getting-started) and [how to configure it](https://eslint.org/docs/user-guide/configuring/configuration-files) if you haven't already. Also learn about [Prettier](https://prettier.io/docs/en/index.html) if you don't know it yet.

If you're starting at Masterworks, you most probably won't need to worry about anything here, everything should be configured already and the project's README should give you guidance on how to lint your code as part of your contributing workflow.

That said, you can continue.

## How

To extend any or all of the presets in this repo, you are going to need to install it first, along with its [peer-dependencies](https://flaviocopes.com/npm-peer-dependencies/).

Depending on the project, you might be using [`npm`](https://docs.npmjs.com/about-npm), [`yarn`](https://classic.yarnpkg.com/en/docs/getting-started), or [`pnpm`](https://pnpm.io/motivation) as your package manager. Be sure to find out this first by reading the project's README and if that fails, check for what kind of lock files live in the repo:

- `npm` uses [`package-lock.json`](https://docs.npmjs.com/cli/v7/configuring-npm/package-lock-json)
- `yarn` uses [`yarn.lock`](https://classic.yarnpkg.com/en/docs/yarn-lock/)
- `pnpm` uses [`pnpm-lock.yaml`](https://pnpm.io/git#lockfiles)

If you don't see any of those, or if you see more than one, consult with your team.

As a minimum, you are going to need to install `@masterworks/eslint-config-masterworks` and the following packages, all as dev-dependencies. Based on your project's package manager:

```shell
$ npm install --save-dev @eslint/js eslint eslint-import-resolver-typescript eslint-plugin-import-x typescript typescript-eslint @masterworks/eslint-config-masterworks@github:MasterworksIO/eslint-config-masterworks#7.0.0
```

```shell
$ yarn add --dev @eslint/js eslint eslint-import-resolver-typescript eslint-plugin-import-x typescript typescript-eslint @masterworks/eslint-config-masterworks@github:MasterworksIO/eslint-config-masterworks#7.0.0
```

```shell
$ pnpm add --save-dev @eslint/js eslint eslint-import-resolver-typescript eslint-plugin-import-x typescript typescript-eslint @masterworks/eslint-config-masterworks@github:MasterworksIO/eslint-config-masterworks#7.0.0
```

Then create an `eslint.config.js` file if it doesn't exist already, and extend the [`base` preset](./base/):

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

Each preset returns one or more flat config objects, so apply them with spread syntax.

The first object with the ignore list is important to keep independent and without any other properties to signal ESLint these files are globally ignored.

See: https://eslint.org/docs/latest/use/configure/migration-guide#ignoring-files

Test the new config by linting your project:

```shell
$ npx eslint
```

From now on, you can extend your config further with more presets, depending on your setup and environment.

## The presets

Each preset has a target use-case and reasoning behind it. Read each preset's README file to understand it. You will also need to check each preset's [peer-dependencies](https://flaviocopes.com/npm-peer-dependencies/).

- [`@masterworks/eslint-config-masterworks/base`](./base/README.md)

  You should always include it as the base for the other presets. It covers JavaScript and TypeScript by default, building on top of [`eslint:recommended`](https://eslint.org/docs/rules/) with extra rules enabled and support for linting ESM imports.

- [`@masterworks/eslint-config-masterworks/node`](./node/README.md)

  Use for services or scripts that run inside Node.js.

- [`@masterworks/eslint-config-masterworks/react`](./react/README.md)

  Core React-specific rules, including rules of hooks.

- [`@masterworks/eslint-config-masterworks/react-web`](./react-web/README.md)

  Adds React DOM, Web API, and JSX accessibility best practices on top of the `react` preset. Use in web projects only, not in React Native or Expo projects.

- [`@masterworks/eslint-config-masterworks/typescript-strict`](./typescript-strict/README.md)

  Adds stricter TypeScript rules on top of `base` for projects using `"strict": true`.

There are also very opinionated presets regarding coding style ending in `-stylish`. Most errors and warnings pointed out by these presets can be automatically fixed with [`eslint --fix`](https://eslint.org/docs/user-guide/command-line-interface#fixing-problems), but they are still kept separate to distinguish aesthetics from function.

- [`@masterworks/eslint-config-masterworks/stylish`](./stylish/README.md)

  Adds stylistic rules for both JavaScript and TypeScript, including what used to live in `typescript-stylish`.

- [`@masterworks/eslint-config-masterworks/react-stylish`](./react-stylish/README.md)

  Adds JSX-focused stylistic rules on top of `react`.

## Prettier

We try to make every preset play nice with prettier. In theory, only the `-stylish` presets should ever touch rules that somehow overlap with prettier's concerns, and even in those, we try to delegate to prettier as much as possible.

When using `@masterworks/eslint-config-masterworks` presets, you should also use our prettier config. In your project's `package.json`:

```json
{
  "name": "my-project",
  "prettier": "@masterworks/eslint-config-masterworks/prettier/prettier.js",
  "devDependencies": {
    "@masterworks/eslint-config-masterworks": "github:MasterworksIO/eslint-config-masterworks#6.0.0"
  }
}
```

## License

See [LICENSE](./LICENSE)
