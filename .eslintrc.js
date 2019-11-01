module.exports = {
  env: {
    'jest/globals': true
  },
  extends: 'airbnb-base',
  plugins: ['jest'],
  rules: {
    'arrow-parens': [2, 'as-needed'],
    curly: [2, 'all'],
    'brace-style': [2, '1tbs', { allowSingleLine: false }],
    camelcase: [2, { ignoreDestructuring: true }],
    'comma-dangle': [2, 'never'],
    'comma-spacing': 1,
    'implicit-arrow-linebreak': 0,
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
    'no-confusing-arrow': 0,
    'no-cond-assign': 0,
    'no-plusplus': 0
  }
};
