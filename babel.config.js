module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        alias: {
          _assets: './src/assets',
          _components: './src/components',
          _constants: './src/constants',
          _services: './src/services',
          _store: './src/store',
          _themes: './src/themes',
          _storybook: './storybook',
          _utils: './src/utils',
        },
      },
    ],
  ],
}
