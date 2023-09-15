module.exports = {
  extends: ['@antfu/eslint-config-vue'],
  rules: {
    'no-console': 'warn',
    'brace-style': 'off',
    '@typescript-eslint/brace-style': [
      'error',
      '1tbs',
      {
        allowSingleLine: true,
      },
    ],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: {
          max: 3,
        },
        multiline: {
          max: 1,
        },
      },
    ],
    'arrow-parens': 'off',
    curly: 'off',
    'antfu/if-newline': 'off',
    'antfu/top-level-function': 'off',
    'no-restricted-globals': 'off',
  },
}
