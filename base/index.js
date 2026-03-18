import js from '@eslint/js'
import * as tsResolver from 'eslint-import-resolver-typescript'
import importPlugin from 'eslint-plugin-import-x'
import tseslint from 'typescript-eslint'

const JS_FILES = ['**/*.js', '**/*.mjs', '**/*.cjs']
const TS_FILES = ['**/*.ts', '**/*.mts', '**/*.cts', '**/*.tsx']

const BASE_RULES = {
  ...js.configs.recommended.rules,
  'accessor-pairs': 'error',
  'array-callback-return': 'error',
  'block-scoped-var': 'error',
  'class-methods-use-this': 'error',
  'consistent-return': 'error',
  'default-case-last': 'error',
  'default-case': 'error',
  'default-param-last': 'error',
  eqeqeq: ['error', 'always', { null: 'ignore' }],
  'func-name-matching': 'error',
  'func-names': ['error', 'as-needed'],
  'grouped-accessor-pairs': 'error',
  'no-alert': 'error',
  'no-array-constructor': 'error',
  'no-caller': 'error',
  'no-console': 'warn',
  'no-constructor-return': 'error',
  'no-div-regex': 'error',
  'no-duplicate-imports': 'error',
  'no-empty-function': 'error',
  'no-eq-null': 'error',
  'no-eval': 'error',
  'no-extend-native': 'error',
  'no-implicit-coercion': 'error',
  'no-implicit-globals': 'off',
  'no-implied-eval': 'error',
  'no-invalid-this': 'error',
  'no-iterator': 'error',
  'no-label-var': 'error',
  'no-loop-func': 'error',
  'no-new-func': 'error',
  'no-new-wrappers': 'error',
  'no-new': 'error',
  'no-octal-escape': 'error',
  'no-param-reassign': 'error',
  'no-proto': 'error',
  'no-return-assign': 'error',
  'no-script-url': 'error',
  'no-self-compare': 'error',
  'no-sequences': 'error',
  'no-shadow': 'error',
  'no-template-curly-in-string': 'error',
  'no-throw-literal': 'error',
  'no-unmodified-loop-condition': 'error',
  'no-unused-expressions': 'error',
  'no-unused-vars': ['error', { ignoreRestSiblings: true }],
  'no-use-before-define': ['error', { functions: false, classes: true, variables: true }],
  'no-useless-call': 'error',
  'no-useless-computed-key': 'error',
  'no-useless-concat': 'error',
  'no-useless-constructor': 'error',
  'no-useless-rename': 'error',
  'no-useless-return': 'error',
  'no-var': 'error',
  'no-void': ['error', { allowAsStatement: true }],
  'object-shorthand': ['error', 'always', { avoidQuotes: true }],
  'prefer-numeric-literals': 'error',
  'prefer-promise-reject-errors': 'error',
  'prefer-rest-params': 'error',
  'prefer-spread': 'error',
  'prefer-template': 'error',
  radix: 'error',
  'require-await': 'error',
  'symbol-description': 'error',
  'vars-on-top': 'error',
  // Import rules.
  'import/no-unresolved': 'error',
  'import/named': 'error',
  'import/namespace': 'error',
  'import/default': 'error',
  'import/export': 'error',
  'import/first': 'error',
  'import/no-absolute-path': 'error',
  'import/no-amd': 'error',
  'import/no-anonymous-default-export': 'error',
  'import/no-commonjs': 'error',
  'import/no-cycle': 'warn',
  'import/no-deprecated': 'warn',
  'import/no-duplicates': 'error',
  'import/no-dynamic-require': 'error',
  'import/no-empty-named-blocks': 'error',
  'import/no-extraneous-dependencies': 'error',
  'import/no-import-module-exports': 'error',
  'import/no-mutable-exports': 'error',
  'import/no-named-as-default-member': 'error',
  'import/no-named-as-default': 'error',
  'import/no-relative-packages': 'warn',
  'import/no-self-import': 'error',
  'import/no-useless-path-segments': 'error',
  'import/no-webpack-loader-syntax': 'error',
}

export const apply = ({ ignores = [], rules = {}, tsconfigRootDir } = {}) => {
  const resolverSettings = {
    'import-x/resolver-next': [
      tsResolver.createTypeScriptImportResolver({
        ...(tsconfigRootDir ? { project: tsconfigRootDir } : {}),
      }),
    ],
  }

  const importPlugin_ = importPlugin.flatConfigs.recommended.plugins['import-x']

  const jsConfig = {
    name: '@masterworks/eslint-config-masterworks-base/js',
    files: JS_FILES,
    ignores,
    plugins: {
      import: importPlugin_,
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    settings: resolverSettings,
    rules: {
      ...BASE_RULES,
      ...rules,
    },
  }

  const tsConfig = {
    name: '@masterworks/eslint-config-masterworks-base/ts',
    files: TS_FILES,
    ignores,
    plugins: {
      import: importPlugin_,
      '@typescript-eslint': tseslint.plugin,
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: tseslint.parser,
      parserOptions: {
        projectService: true,
        ...(tsconfigRootDir ? { tsconfigRootDir } : {}),
      },
    },
    settings: {
      ...importPlugin.flatConfigs.typescript.settings,
      ...resolverSettings,
    },
    rules: {
      ...BASE_RULES,
      // TypeScript-specific rules.
      'import/named': 'off',
      ...tseslint.configs.recommendedTypeChecked.reduce(
        (acc, next) => ({
          ...acc,
          ...next.rules,
        }),
        {},
      ),
      '@typescript-eslint/class-methods-use-this': 'error',
      '@typescript-eslint/default-param-last': 'error',
      '@typescript-eslint/no-empty-function': 'error',
      '@typescript-eslint/no-dupe-class-members': 'error',
      '@typescript-eslint/no-shadow': 'error',
      '@typescript-eslint/no-unused-expressions': 'error',
      '@typescript-eslint/no-use-before-define': 'error',
      '@typescript-eslint/parameter-properties': 'error',
      '@typescript-eslint/require-array-sort-compare': 'error',
      '@typescript-eslint/unbound-method': ['error', { ignoreStatic: true }],
      // Disable conflicting base rules.
      'class-methods-use-this': 'off',
      'default-param-last': 'off',
      'no-dupe-class-members': 'off',
      'no-duplicate-imports': 'off',
      'no-empty-function': 'off',
      'no-invalid-this': 'off',
      'no-redeclare': 'off',
      'no-shadow': 'off',
      'no-unused-expressions': 'off',
      'no-use-before-define': 'off',
      ...rules,
    },
  }

  return [jsConfig, tsConfig]
}
