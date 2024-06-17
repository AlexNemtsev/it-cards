module.exports = {
  extends: ['@it-incubator/eslint-config', 'plugin:storybook/recommended'],
  overrides: [
    {
      files: ['**/*.stories.tsx'],
      rules: {
        'no-console': 'off',
        'react-hooks/rules-of-hooks': 'off'
      },
    },
  ],
  rules: {
    'react/button-has-type': 'off',
    'react/jsx-curly-brace-presence': ['error', {props: 'never'}],
  }
}