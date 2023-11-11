module.exports = {
    root: true,
    env: {
      browser: true,
      es2021: true,
    },
    extends: ['plugin:vue/vue3-essential',
    '@vue/eslint-config-airbnb',
    'prettier'],
    overrides: [
      {
        env: {
          node: true,
        },
        files: ['.eslintrc.{js,cjs}'],
        parserOptions: {
          sourceType: 'script',
        },
      },
    ],
    parserOptions: {
      ecmaVersion: 'latest',
    },
    rules: {
      'no-param-reassign': 'off',
    },
  }