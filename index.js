/**
 * Copyright (C) 2018 The Trustees of Indiana University
 * SPDX-License-Identifier: BSD-3-Clause
 */

module.exports = {
  'env': {
    'browser': true,
    'node': true
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
    'lines-between-class-members': 'error',
    'prefer-const': ['error', { 'destructuring': 'all'}],
    'quotes': ['error', 'single', { 'avoidEscape': true, 'allowTemplateLiterals': true }],
    'prettier/prettier': ['error', { 'singleQuote': true, 'printWidth': 80 }]
  },
  'plugins': [
    'html',
    'prettier'
  ]
};
