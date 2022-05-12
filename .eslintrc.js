module.exports = {
  'env': [
    'plugin:vue/strongly-recommended'
  ],

  'extends': [
    'plugin:vue/essential',
  ],

  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },

  'plugins': [
    'vue',
  ],

  'rules': {
    'generator-star-spacing': 'off',
    'no-tabs': 'off',
    'no-unused-vars': 'off',
    'no-console': 'off',
    'no-irregular-whitespace': 'off',
    'no-debugger': 'off',
    'max-len': ['error', {'ignoreStrings': true}], // 忽略过长的字符串行
  },

  env: {
    browser: true,
    es2021: true
  },

  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },

  plugins: [
    'vue'
  ],

  rules: {
    'generator-star-spacing': 'off',
    'no-tabs': 'off',
    'no-unused-vars': 'off',
    'no-console': 'off',
    'no-irregular-whitespace': 'off',
    'no-debugger': 'off',
    'max-len': [
      'error',
      {
        ignoreStrings: true
      }
    ]
  }
};
