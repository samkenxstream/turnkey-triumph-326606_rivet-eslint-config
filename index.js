/**
 * Copyright (C) 2018 The Trustees of Indiana University
 * SPDX-License-Identifier: BSD-3-Clause
 */

module.exports = {
  'env': {
    'browser': true
  },
  'parserOptions': {
    'ecmaVersion': 10,
    'sourceType': 'module'
  },
  'extends': [
    'eslint:recommended',
    'prettier'
  ],
  'rules': {
    'arrow-body-style': [2, { 'as-needed' }],
    'indent': ['error', 2, { 'SwitchCase': 1 }],
    'lines-between-class-members': 'error',
    'no-tabs': 'error',
    'no-unused-expressions': [2, { 'allowTaggedTemplates': true }],
    'prefer-const': ['error', { 'destructuring': 'all'}],
    'quotes': ['error', 'single', { 'avoidEscape': true, 'allowTemplateLiterals': true }],
    'prettier/prettier': ['error', { 'singleQuote': true, 'printWidth': 80 }]
  },
  'plugins': [
    'html',
    'prettier'
  ]
};
