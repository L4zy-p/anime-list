module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'next/core-web-vitals',
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 12,
    'sourceType': 'module',
  },
  'plugins': [
    'react',
    '@typescript-eslint',
  ],
  'rules': {
    '@typescript-eslint/no-unused-vars': [2, {
      'argsIgnorePattern': '^_',
      'caughtErrorsIgnorePattern': '^_',
    }],
    '@typescript-eslint/no-explicit-any': 1,
    'no-unused-vars': 0,
    'react/prop-types': 0,
    'camelcase': 0,
    'max-len': 0,
    'no-unused-vars': 0,
    'no-console': [1, {allow: ['warn', 'error']}],
    'linebreak-style': 0,
    'require-jsdoc': 0,
    'quote-props': 0,
    'semi': 0,
  },
};
