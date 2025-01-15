import * as tsResolver from 'eslint-import-resolver-typescript'
import importPlugin from 'eslint-plugin-import-x'
import tseslint from 'typescript-eslint'

export const apply = ({
  files = ['**/*.ts', '**/*.mts', '**/*.cts', '**/*.tsx'],
  ignores = [],
  rules = {},
  tsconfigRootDir,
}) => ({
  name: '@masterworks/eslint-config-masterworks-typescript',
  files,
  ignores,
  languageOptions: {
    parser: tseslint.parser,
    parserOptions: {
      projectService: true,
      tsconfigRootDir,
    },
  },
  plugins: {
    '@typescript-eslint': tseslint.plugin,
  },
  settings: {
    ...importPlugin.flatConfigs.typescript.settings,
    'import-x/resolver-next': [
      tsResolver.createTypeScriptImportResolver({
        project: tsconfigRootDir,
      }),
    ],
  },
  rules: {
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
    '@typescript-eslint/no-dupe-class-members': 'error',
    '@typescript-eslint/no-unused-expressions': 'error',
    '@typescript-eslint/no-use-before-define': 'error',
    '@typescript-eslint/parameter-properties': 'error',
    '@typescript-eslint/require-array-sort-compare': 'error',
    '@typescript-eslint/unbound-method': ['error', { ignoreStatic: true }],
    // Disable conflicting rules.
    'class-methods-use-this': 'off',
    'default-param-last': 'off',
    'no-dupe-class-members': 'off',
    'no-duplicate-imports': 'off',
    'no-invalid-this': 'off',
    'no-redeclare': 'off',
    'no-unused-expressions': 'off',
    'no-use-before-define': 'off',
    // Overrides.
    ...rules,
  },
})
