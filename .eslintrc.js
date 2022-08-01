module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'node': true,
  },
  'extends': [
    'plugin:react/recommended',
    'google',
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'plugins': [
    'react',
    '@typescript-eslint',
  ],
  'rules': {
    'max-len': [2, {'code': 120, 'tabWidth': 4, 'ignoreUrls': true}],
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'require-jsdoc': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
  },
  'settings': {
    'react': {
      'pragma': 'React',
      'version': '18.1.0',
    },
  },
};
