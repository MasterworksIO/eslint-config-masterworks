# eslint-config-masterworks

[ESLint config presets](https://eslint.org/docs/user-guide/configuring/configuration-files#extending-configuration-files) for Masterworks.


## Why

At Masterworks, we use JavaScript and TypeScript extensively across a multitude of repositories and environments. We want to have a consistent style across projects, enforce practices we deem "good", and catch those silly bugs & typos we all fall for once in a while.

In practice, every project is unique and one-fits-all solutions don't exist; some projects use JSX, some lack ES Modules support, some run in AWS Lambdas, some run in Internet Explorer 11, some use TypeScript, some don't, and so on.

For that reason, we don't recommend a single holistic config, instead, we group rules into several presets by their intended context and scope — trying to balance granularity and convenience — from which you can extend based on the project setup or runtime environment.

## Before you continue

Read a little bit about [ESLint](https://eslint.org/docs/user-guide/getting-started) and [how to configure it](https://eslint.org/docs/user-guide/configuring/configuration-files) if you haven't already. Also learn about [Prettier](https://prettier.io/docs/en/index.html) if you don't know it yet.

If you're starting at Masterworks, you most probably won't need to worry about anything here, everything should be configured already and the project's README should give you guidance on how to lint your code as part of your contributing workflow.

That said, you can continue.

## How

To extend any or all of the presets in this repo, you gonna need to install it first, along with its [peer-dependencies](https://flaviocopes.com/npm-peer-dependencies/).

Depending on the project, you might be using [`npm`](https://docs.npmjs.com/about-npm), [`yarn`](https://classic.yarnpkg.com/en/docs/getting-started), or [`pnpm`](https://pnpm.io/motivation) as your package manager. Be sure to find out this first by reading the project's README and if that fails, check for what kind of lock files live in the repo:

* `npm` uses [`package-lock.json`](https://docs.npmjs.com/cli/v7/configuring-npm/package-lock-json)
* `yarn` uses [`yarn.lock`](https://classic.yarnpkg.com/en/docs/yarn-lock/)
* `pnpm` uses [`pnpm-lock.yml`](https://pnpm.io/git#lockfiles)

If you don't see any of those, or if you see more than one, consult with your team.

As a minimum, you are going to need to install `eslint` and `eslint-config-masterworks` as dev-dependencies. Based on your project's package manager:

```shell
$ npm install --save-dev eslint @masterworks/eslint-config-masterworks@github:MasterworksIO/eslint-config-masterworks#1.0.0
```

```shell
$ yarn install --save-dev eslint @masterworks/eslint-config-masterworks@github:MasterworksIO/eslint-config-masterworks#1.0.0
```

```shell
$ pnpm install --save-dev eslint @masterworks/eslint-config-masterworks@github:MasterworksIO/eslint-config-masterworks#1.0.0
```

Then create an `.eslintrc.json` (or any other of the [formats supported by ESLint](https://eslint.org/docs/user-guide/configuring/configuration-files#configuration-file-formats)) if it doesn't exist already, and extend the [`base` preset](./base/):

```json
{
  "extends": [
    "@masterworks/eslint-config-masterworks/base"
  ],
}
```

Test the new config by linting your project:

```shell
$ npx eslint .
```

From now on, you can extend your config further with more presents, depending on your setup and/or environment, whatever makes sense.

## The presets

Each preset has a target use-case and reasoning behind. Read each presets' README file to understand them. You will also need to check each presets' [peer-dependencies](https://flaviocopes.com/npm-peer-dependencies/).

* [`@masterworks/eslint-config-masterworks/base`](./base/README.md)

  You should always include it as the base for the other presets. It is basically the [`eslint:recommended` preset](https://eslint.org/docs/rules/) with some extra few rules enabled.

* [`@masterworks/eslint-config-masterworks/modern`](./modern/README.md)

  If your runtime is modern, or if your source-code is going to be trans-piled anyway.

* [`@masterworks/eslint-config-masterworks/modules`](./modules/README.md)

  To check for correct usage of ES Modules and missing files or exports.

* [`@masterworks/eslint-config-masterworks/node`](./node/README.md)

  Use for services or scripts that run inside Node.js

* [`@masterworks/eslint-config-masterworks/react`](./react/README.md)

  React-specific rules, including rules of hooks.

* [`@masterworks/eslint-config-masterworks/jsx`](./jsx/README.md)

  Rules specific to JSX, not strictly necessary in relation to React.

* [`@masterworks/eslint-config-masterworks/typescript`](./typescript/README.md)

  Base TypeScript rules. Replaces some of `@masterworks/eslint-config-masterworks/base` rules that are incompatible with TypeScript.

* [`@masterworks/eslint-config-masterworks/typescript-strict`](./typescript-strict/README.md)

  To accompany `strict: true` in your tsconfig.json.


There are also very opinionated presents regarding to coding style ending in `-stylish`. All errors pointed out by these presets can be automatically fixed with [`eslint --fix`](https://eslint.org/docs/user-guide/command-line-interface#fixing-problems) but are still kept separated to distinguish aesthetics from function.


* [`@masterworks/eslint-config-masterworks/jsx-stylish`](./jsx-stylish/README.md)
* [`@masterworks/eslint-config-masterworks/typescript-stylish`](./typescript-stylish/README.md)


## Prettier

We try to make every preset play nice with prettier. In theory, only the `-stylish` presets should ever touch rules that somehow overlap with prettier's concerns, and even in those, we try to delegate to prettier as much as possible.

When using `@masterworks/eslint-config-masterworks` presets, you should also use our prettier config. In your project's `package.json`:

```json
{
  "name": "my-project",
  "prettier": "@masterworks/eslint-config-masterworks/prettier",
  "devDependencies": {
    "@masterworks/eslint-config-masterworks": "github:MasterworksIO/eslint-config-masterworks#1.0.0",
  }
}
```

## License

See [LICENSE](./LICENSE)
