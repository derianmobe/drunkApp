module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['.src'],
        alias: {
          '@state': './src/state',
          '@ui': './src/ui/',
          '@activities': './src/activities/',
          '@common': './src/common/index.ts',
          '@routes': './src/routes/index.tsx',
        },
      },
    ],
  ],
};
