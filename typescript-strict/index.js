module.exports = {
  rules: {
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowExpressions: true,
      },
    ],
    '@typescript-eslint/no-implicit-any-catch': ['error'],
    '@typescript-eslint/no-inferrable-types': ['warn'],
    '@typescript-eslint/no-non-null-assertion': ['error'],
    '@typescript-eslint/no-redeclare': ['error'],
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/no-this-alias': ['error'],
    '@typescript-eslint/no-unsafe-argument': ['error'],
    '@typescript-eslint/no-unsafe-assignment': ['error'],
    '@typescript-eslint/no-unsafe-call': ['error'],
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/prefer-enum-initializers': ['error'],
    '@typescript-eslint/prefer-literal-enum-member': ['error'],
    '@typescript-eslint/promise-function-async': ['error'],
    '@typescript-eslint/switch-exhaustiveness-check': ['error'],
  },
}
