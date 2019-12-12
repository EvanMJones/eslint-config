module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
  ],
  rules: {

    // Variables
    'no-unused-vars': [ 'error', {
      args: 'after-used',
      varsIgnorePattern: '^(debug|error)$',
    } ],

    // Stylistic Issues
    'array-bracket-newline': [ 'error', 'consistent' ],
    'array-bracket-spacing': [ 'error', 'always' ],
    'array-element-newline': [ 'error', 'consistent' ],
    'block-spacing': [ 'error', 'always' ],
    'brace-style': [ 'error', '1tbs', { allowSingleLine: true } ],
    'comma-dangle': [ 'error', 'only-multiline' ],
    'comma-spacing': 'error',
    'comma-style': 'error',
    'computed-property-spacing': [ 'error', 'always' ],
    'eol-last': 'warn',
    'func-call-spacing': 'error',
    'implicit-arrow-linebreak': 'error',
    'indent': [ 'error', 2, { SwitchCase: 1 } ],
    'key-spacing': 'warn', // TODO: Decide on what we want for this https://eslint.org/docs/rules/key-spacing
    'keyword-spacing': [ 'error', {
      overrides: {
        for: { after: false },
        if: { after: false },
        switch: { after: false },
        while: { after: false },
      },
    } ],
    'linebreak-style': [ 'error', 'unix' ],
    'multiline-comment-style': [ 'error', 'separate-lines' ],
    'multiline-ternary': [ 'error', 'always-multiline' ],
    'no-trailing-spaces': 'warn',
    'no-whitespace-before-property': 'error',
    'nonblock-statement-body-position': [ 'error', 'beside' ],
    'object-curly-newline': [ 'error', { consistent: true } ],
    'object-curly-spacing': [ 'error', 'always' ],
    'object-property-newline': [ 'error', { allowAllPropertiesOnSameLine: true } ],
    'quotes': [ 'error', 'single' ],
    'semi': [ 'error', 'always' ],
    'semi-spacing': 'error',
    'semi-style': 'error',
    'space-before-blocks': 'error',
    'space-before-function-paren': [ 'error', {
      anonymous: 'never',
      named: 'never',
      asyncArrow: 'always',
    } ],
    'space-in-parens': [ 'error', 'always' ],
    'space-infix-ops': 'error',
    'space-unary-ops': [ 'error', {
      words: true,
      nonwords: false,
      overrides: {
        '!': true,
        '!!': true,
        'typeof': false,
      }
    } ],
    'spaced-comment': [ 'warn', 'always', { exceptions: [ '/' ] } ],
    'switch-colon-spacing': 'error',

    // ECMAScript 6
    'arrow-spacing': 'error',
    'no-var': 'error',
    'prefer-const': 'error',
  },
};
