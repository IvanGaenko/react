module.exports = {
  extends: 'airbnb',
  rules: {
    semi: ['error', 'always'],
    single: { avoidEscape: true },
    'jsx-quotes': ['error', 'prefer-single'],
    quotes: ['error', 'prefer-single'],
  },
  env: {
    browser: true,
    node: true,
    jasmine: true,
  },
};
