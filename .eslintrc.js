module.exports = {
  root: true,
  extends: 'airbnb-base',
  env: {
    browser: true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    allowImportExportEverywhere: true,
    sourceType: 'module',
    requireConfigFile: false,
  },
  rules: {
    'import/extensions': ['error', { js: 'always' }], // require js file extensions in imports
    // 'linebreak-style': ['error', 'unix'], // enforce unix linebreaks
    'linebreak-style': 'off',
    'no-param-reassign': [2, { props: false }], // allow modifying properties of param
    'indent' : 'off',
    'quotes' : 'off',
    'no-trailing-spaces' : 'off',
    'space-infix-ops' : 'off',
    'keyword-spacing' : 'off',
    'key-spacing' : 'off',
    'quote-props' : 'off',
    'eol-last' : 'off',
    'eqeqeq' : 'off',
    'operator-linebreak' : 'off',
    'prefer-const' : 'off',
    'comma-dangle' : 'off',
    'space-before-blocks' : 'off',
    'no-inner-declarations' : 'off',
    'spaced-comment' : 'off',
    'no-shadow' : 'off',
    'no-console' : 'off',
    'no-undef' : 'off',
    'no-plusplus':'off',
    'nonblock-statement-body-position':'off',
    'curly':'off',
    'implicit-arrow-linebreak':'off',
    'function-paren-newline':'off',
    'declaration-property-value-no-unknown':'off',
  },
};
