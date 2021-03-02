module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.src'],
        alias: {
          '@state': './src/state',
          '@ui': './src/ui/',
        },
      },
    ],
  ],
};
