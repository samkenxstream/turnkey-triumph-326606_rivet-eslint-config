/**
 * Copyright (C) 2018 The Trustees of Indiana University
 * SPDX-License-Identifier: BSD-3-Clause
 */

module.exports = {
  'env': {
    'browser': true
  },
  'parserOptions': {
    'ecmaVersion': 6,
    'sourceType': 'module'
  },
  'extends': ['eslint:recommended'],
  'rules': {
    'indent': ['error', 2, { 'SwitchCase': 1 }],
    'no-tabs': 'error',
    'quotes': ['error', 'single']
  }
};
