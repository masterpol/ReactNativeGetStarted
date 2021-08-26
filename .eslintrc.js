module.exports = {
  root: true,
  env: {
    es2020: true,
    jest: true,
  },
  extends: [
    '@react-native-community',
    'plugin:prettier/recommended',
    'prettier/react',
  ],
  globals: {
    render: 'readonly',
  },
  rules: {
    semi: 0,
  },
}
