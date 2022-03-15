module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'prettier',
    // 'eslint-config-prettier',
  ],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    semi: ['error', 'never'],
    'prettier/prettier': ['error', { singleQuote: true, semi: false }],
    'no-unused-vars': 'warn',
    'no-empty': 'warn',
    "vue/multi-word-component-names": ["error", {
      "ignores": []
    }]
  },
}
